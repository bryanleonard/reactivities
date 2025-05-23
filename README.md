# Reactivities
## A .NET 9 API + React (Vite) application

Full-stack web application using a CQRS and Mediator patterns and includes the following:

- **Backend**: .NET 9 Web API
- **Frontend**: React with Vite
- **Domain Layer**: Core domain models
- **Persistence Layer**: Database context and migrations

<br />

## Project Structure

```
/
├── API          # ASP.NET Core Web API (entry point)
├── Client       # React app built with Vite
├── Domain       # Domain entities and core business logic
└── Persistence  # EF Core DbContext and database migrations
```

<br />

## Prerequisites

- [.NET 9 SDK](https://dotnet.microsoft.com/download)
- [Node.js (LTS)](https://nodejs.org/)
- SQLite for development

<br />

## Backend Setup (`/API` + supporting projects)

### 1. Restore NuGet Packages

```bash
cd API
dotnet restore
```
<br />

### 2. Apply Migrations

If you're using Entity Framework Core and a local DB:

```bash
cd Persistence
dotnet ef database update --startup-project ../API
```
<br />

### 3. Run the API

```bash
cd API
dotnet run
```


The API will be available at:

- `https://localhost:5000`

If you receive HTTPS-related errors, you may also need to run from within the API folder:
```
dotnet dev-certs https --clean
dotnet dev-certs https --trust
```

<br />

## Frontend Setup (`/Client`)

### 1. Install Node Modules

```bash
cd Client
npm install
```

The front-end does have a self-signed cert that needs installed. I followed the instructions for installing `mkcert` as seen in this [SO article](https://stackoverflow.com/a/69743888). Once mkcert is installed:
```bash
mkcert -install
npm run cert
```

You may also need to run:
```
dotnet dev-certs https --clean
dotnet dev-certs https --trust
```

If all of that is too much to worry about, update your `Client/vite.config.ts` by removing the `https` object

```js
server: {
	port: 3000,
	https: {
		key: fs.readFileSync('./.cert/key.pem'),
		cert: fs.readFileSync('./.cert/cert.pem'),
	},
}
```
<br />

### 2. Run the Vite Dev Server

```bash
npm run dev
```
By default, Vite runs at `https://localhost:3000`.

<br />

## Configuration

- **API Base URL**: Configure in frontend using `.env` or `vite.config.js`
- **CORS**: Ensure the API allows requests from the frontend dev server
<br />
- **Connection String**: Set in `appsettings.Development.json` for the local DB

<br />

## Build for Production

### Backend

```bash
cd API
dotnet publish -c Release
```

### Frontend

```bash
cd Client
npm run build
```

This will output static files to `Client/dist`.


## Common EF Commands

Add a migration:

```bash
dotnet ef migrations add MigrationName --project Persistence --startup-project API
```

Update the database:

```bash
dotnet ef database update --startup-project API
```
