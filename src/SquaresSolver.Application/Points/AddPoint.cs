using SquaresSolver.Database;
using SquaresSolver.Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace SquaresSolver.Application.Points
{
    public class AddPoint
    {
        public DataContext _context { get; set; }

        public AddPoint(DataContext context)
        {
            _context = context;
        }

        public async Task<bool> Do(Request request)
        {
            var pointEntity = new PointModel()
            {
                X = request.X,
                Y = request.Y
            };

            _context.Points.Add(pointEntity);
            
            await _context.SaveChangesAsync();

            return true;
        }

        public class Request
        {
            public int X { get; set; }
            public int Y { get; set; }
        }
    }
}
