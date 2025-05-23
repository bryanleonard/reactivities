using System;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Persistence;

namespace Application.Activities.Queries;

public class GetActivityDetails
{
	public class Query : IRequest<Activity>
	{
		public required string Id { get; set; }
	}

	public class Handler(AppDbContext context) : IRequestHandler<Query, Activity>
	{
		public async Task<Activity> Handle(Query request, CancellationToken cancellationToken)
		{
			var results = await context.Activities.FindAsync([request.Id], cancellationToken);

			if (results == null)
			{
				throw new Exception("Activity not found");
			}
			return results;
		}
	}
}
