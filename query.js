{
    "username": "mod",
    "email": "mod@test.com",
    "password": "123456789",
    "roles": ["moderator","user"]
}

{
    "username": "admin",
    "email": "admin@test.com",
    "password": "123456789",
    "roles": ["admin"]
}

{
    "username": "user",
    "email": "user@test.com",
    "password": "123456789",
    "roles": ["user"]
}

INSERT INTO public.user_tickets(
	"createdAt", "updatedAt", "userId", "ticketId")
    VALUES ('08-02-2021','08-02-2021','3','1');
    
    INSERT INTO public.tickets(
        id, name, priority, status, "createdAt", "updatedAt")
        VALUES (1, 'test', 'HIGH', 'OPEN', '08-02-2021', '08-02-2021');

        INSERT INTO public.user_tickets(
            "createdAt", "updatedAt", "userId", "ticketId")
            VALUES ('08-02-2021','08-02-2021',1,1);