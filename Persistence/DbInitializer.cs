using Domain;

namespace Persistence;

public class DbInitializer
{
	public static async Task SeedData(AppDbContext context)
	{
		if (context.Activities.Any())
			return;

		var activities = new List<Activity>
		{
			new() {
				Title = "Past Activity 1",
				Date = DateTime.Now.AddMonths(-2),
				Description = "Activity 2 months ago",
				Category = "drinks",
				City = "Cleveland",
				Venue = "The Agora Theatre & Ballroom, 5000 Euclid Ave, Cleveland, OH 44103, United States",
				Latitude = 41.50315,
				Longitude = -81.6485,
			},
			new() {
				Title = "Past Activity 2",
				Date = DateTime.Now.AddMonths(-1),
				Description = "Activity 1 month ago",
				Category = "culture",
				City = "Cleveland",
				Venue = "Severance Music Center, 11001 Euclid Ave, Cleveland, OH 44106, United States",
				Latitude = 41.506348,
				Longitude = -81.609336,
			},
			new() {
				Title = "Future Activity 1",
				Date = DateTime.Now.AddMonths(1),
				Description = "Activity 1 month in future",
				Category = "culture",
				City = "Cleveland",
				Venue = "Cleveland Museum of Art, 11150 East Blvd, Cleveland, OH 44106, United States",
				Latitude = 41.508951,
				Longitude = -81.611614,
			},
			new() {
				Title = "Future Activity 2",
				Date = DateTime.Now.AddMonths(2),
				Description = "Activity 2 months in future",
				Category = "music",
				City = "Cleveland",
				Venue = "Jacobs Pavilion, 2014 Sycamore St, Cleveland, OH 44113, United States",
				Latitude = 41.4982,
				Longitude = -81.7048,
			},
			new() {
				Title = "Future Activity 3",
				Date = DateTime.Now.AddMonths(3),
				Description = "Activity 3 months in future",
				Category = "drinks",
				City = "Cleveland",
				Venue = "Brothers Lounge, 11609 Detroit Ave, Cleveland, OH 44102, United States",
				Latitude = 41.4791,
				Longitude = -81.7212,
			},
			new() {
				Title = "Future Activity 4",
				Date = DateTime.Now.AddMonths(4),
				Description = "Activity 4 months in future",
				Category = "drinks",
				City = "Cleveland",
				Venue = "The Grog Shop, 2785 Euclid Heights Blvd, Cleveland Heights, OH 44106, United States",
				Latitude = 41.5084,
				Longitude = -81.5815,
			},
			new() {
				Title = "Future Activity 5",
				Date = DateTime.Now.AddMonths(5),
				Description = "Activity 5 months in future",
				Category = "culture",
				City = "Cleveland",
				Venue = "Rock & Roll Hall of Fame, 1100 E 9th St, Cleveland, OH 44114, United States",
				Latitude = 41.508587,
				Longitude = -81.695602,
			},
			new() {
				Title = "Future Activity 6",
				Date = DateTime.Now.AddMonths(6),
				Description = "Activity 6 months in future",
				Category = "music",
				City = "Cleveland",
				Venue = "Beachland Ballroom & Tavern, 15711 Waterloo Rd, Cleveland, OH 44110, United States",
				Latitude = 41.5802,
				Longitude = -81.5661,
			},
			new() {
				Title = "Future Activity 7",
				Date = DateTime.Now.AddMonths(7),
				Description = "Activity 2 months ago",
				Category = "travel",
				City = "Cleveland",
				Venue = "Cuyahoga River, Cleveland, OH, United States",
				Latitude = 41.4957,
				Longitude = -81.7036,
			},
			new() {
				Title = "Future Activity 8",
				Date = DateTime.Now.AddMonths(8),
				Description = "Activity 8 months in future",
				Category = "film",
				City = "Cleveland",
				Venue = "Progressive Field, 2401 Ontario St, Cleveland, OH 44115, United States",
				Latitude = 41.496211,
				Longitude = -81.685229,
			},
			new() {
				Title = "Future Activity 9",
				Date = DateTime.Now.AddMonths(3),
				Description = "Activity 3 months in future",
				Category = "culture",
				City = "Pittsburgh",
				Venue = "The Andy Warhol Museum, 117 Sandusky St, Pittsburgh, PA 15212, United States",
				Latitude = 40.44838,
				Longitude = -80.0025,
			},
			new() {
				Title = "Future Activity 10",
				Date = DateTime.Now.AddMonths(5),
				Description = "Activity 5 months in future",
				Category = "culture",
				City = "Pittsburgh",
				Venue = "Phipps Conservatory and Botanical Gardens, 1 Schenley Park, Pittsburgh, PA 15213, United States",
				Latitude = 40.439147, 
				Longitude = -79.947435,
			}
		};

		context.Activities.AddRange(activities);

		await context.SaveChangesAsync();
	}
}
