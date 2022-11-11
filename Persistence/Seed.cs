using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
namespace Persistence
{
    public static  class Seed
    {
        public static async Task SeedDataAsync(DataContext context){
            if (!context.Activities.Any())
            {
                var activities = new List<Activity>
                {
                    new Activity()
                    {
                        Category = "Favorite",
                        City = "Tehran",
                        Date = DateTime.Now,
                        Description = "Sample Description 1",
                        Title = "Book about my favorites",
                        Venue = "Pub"
                    },
                    new Activity()
                    {
                        Category = "Drink",
                        City = "Tehran",
                        Date = DateTime.Now.AddDays(-1),
                        Description = "Sample Description 2",
                        Title = "How to make drinks",
                        Venue = "Pub"
                    }
                };
                await context.Activities.AddRangeAsync(activities);
                await context.SaveChangesAsync();
            }
        }
    }
}