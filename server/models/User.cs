using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace server.Models
{
    public class User
    {
        [BsonId] // Tells Mongo this is the document _id
        [BsonRepresentation(BsonType.ObjectId)] // Allows using string instead of ObjectId type directly
        public string Id { get; set; } = null!;

        public string Username { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string PasswordHash { get; set; } = string.Empty;
        public string Salt { get; set; } = string.Empty;
    }
}
