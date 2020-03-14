using SquaresSolver.Database;
using SquaresSolver.Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Linq;

namespace SquaresSolver.Application.Points
{
    public class DeletePoint
    {
        public DataContext _context { get; set; }

        public DeletePoint(DataContext context)
        {
            _context = context;
        }

        public async Task<bool> Do(Request request)
        {
            var pointEntity = _context.Points
                 .FirstOrDefault(p => p.X == request.X && p.Y == request.Y);

            _context.Points.Remove(pointEntity);

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
