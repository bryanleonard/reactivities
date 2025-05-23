using System;
using System.Linq;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Activities.Queries;

public class GetActivitiesList
{
	public class Query : IRequest<List<Activity>> {}
	public class Handler(AppDbContext context) : IRequestHandler<Query, List<Activity>>
	{
		public async Task<List<Activity>> Handle(Query request, CancellationToken cancellationToken)
		{
			var results = await context.Activities.ToListAsync(cancellationToken);
			return results;
		}
	}
}
