using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Activities.Commands;

public class EditActivity
{
	public class Command : IRequest
	{
		public required Activity Activity { get; set; }
	}

	public class Handler(AppDbContext context, IMapper mapper) : IRequestHandler<Command>
	{
		public async Task Handle(Command request, CancellationToken cancellationToken)
		{
			var activity = await context.Activities
				.FindAsync([request.Activity.Id], cancellationToken)
					?? throw new Exception("Activity not found");

			// activity.Title = request.Activity.Title;
			mapper.Map(request.Activity, activity);
			Console.WriteLine($"Entity state: {context.Entry(activity).State}");

			var result = await context.SaveChangesAsync(cancellationToken);
			
			Console.WriteLine($"---------------------------------------");
			Console.WriteLine($"Request type: {request.Activity.GetType().Name}");
			Console.WriteLine($"Rows affected: {result}");
			Console.WriteLine($"---------------------------------------");
		}
	}
}
