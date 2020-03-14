using Microsoft.EntityFrameworkCore;
using SquaresSolver.Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace SquaresSolver.Database
{
    public class DataContext : DbContext
    {
        public DbSet<PointModel> Points { get; set;}

        public DataContext(DbContextOptions options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            builder.Entity<PointModel>().HasKey(p => new { p.X, p.Y });
        }
    }

    
}
