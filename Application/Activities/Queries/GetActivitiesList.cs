using System;
using System.Linq;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Persistence;

namespace Application.Activities.Queries;

public class GetActivitiesList
{
	public class Query : IRequest<List<Activity>> {}
	public class Handler(AppDbContext context) : IRequestHandler<Query, List<Activity>>
	// How to test the cancellation token
	// public class Handler(AppDbContext context, ILogger<GetActivitiesList> logger) : IRequestHandler<Query, List<Activity>>
	{
		public async Task<List<Activity>> Handle(Query request, CancellationToken cancellationToken)
		{
			// How to test the cancellation token
			// try
			// {
			// 	for (int i = 0; i < 10; i++)
			// 	{
			// 		cancellationToken.ThrowIfCancellationRequested();
			// 		await Task.Delay(1000, cancellationToken);
			// 		logger.LogInformation($"Task {i} has completed");
			// 	}
			// }
			// catch (System.Exception)
			// {
			// 	logger.LogInformation($"Task was cancelled");
			// }

			var results = await context.Activities.ToListAsync(cancellationToken);
			return results;
		}
	}
}
