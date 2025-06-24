using MongoDB.Driver;
using server.Models;
using Microsoft.Extensions.Options;
using server.Configurations;

namespace server.Services
{
    public class UserService
    {
        private readonly IMongoCollection<User> _users;

        public UserService(IOptions<MongoDbSettings> settings)
        {
            var client = new MongoClient(settings.Value.ConnectionString);
            var database = client.GetDatabase(settings.Value.Database);
            _users = database.GetCollection<User>("Users");
        }

        public async Task<bool> UserExistsAsync(string email) =>
            await _users.Find(u => u.Email == email).AnyAsync();

        public async Task<User?> GetByEmailAsync(string email) =>
            await _users.Find(u => u.Email == email).FirstOrDefaultAsync();

        public async Task CreateAsync(User user) =>
            await _users.InsertOneAsync(user);
    }
}
