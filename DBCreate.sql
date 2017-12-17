-- Database: Concerts_Tour

-- DROP DATABASE "Concerts_Tour";

-- CREATE DATABASE "Concerts_Tour"
--    WITH 
--    OWNER = postgres
--    ENCODING = 'UTF8'
--    LC_COLLATE = 'C'
--    LC_CTYPE = 'C'
--    TABLESPACE = pg_default
--    CONNECTION LIMIT = -1;
    
--DROP table artists;
--DROP table venues;

CREATE table venues
(
    id serial primary key,
    name varchar(80),
    location varchar(200),
    showtime date,
    artistsName varchar(80),
    ticketPrice float
);



CREATE table artists
(
    artistsName varchar(80),
    venueID integer not null references venues(id),
    genre varchar(70),
    headliner boolean,
    timePlaying varchar(40)
);

INSERT INTO venues (name, location, showtime, artistsName, ticketPrice) VALUES ('Rebel Lounge', 'Phoenix, AZ', to_date('2017-12-8', 'YYYY-MM-DD'), 'Rise Against', 35.00);
INSERT INTO venues (name, location, showtime, artistsName, ticketPrice) VALUES ('House of Blues', 'Boston, NH', to_date('2017-12-13', 'YYYY-MM-DD'), 'Rise Against', 25.00);
INSERT INTO venues (name, location, showtime, artistsName, ticketPrice) VALUES ('Rock am Ring', 'Nurburg, Germany', to_date('2017-12-15', 'YYYY-MM-DD'), 'The Offspring', 20.00);
INSERT INTO venues (name, location, showtime, artistsName, ticketPrice) VALUES ('Downtown Las Vegas Center', 'Las Vegas, NV', to_date('2017-11-4', 'YYYY-MM-DD'), 'Foo Fighters', 40.00);

commit;

INSERT INTO artists (artistsName, venueID, genre, headliner, timePlaying) VALUES ('Rise Against', 1, 'Punk', true, '4:00 pm');
INSERT INTO artists (artistsName, venueID, genre, headliner, timePlaying) VALUES ('The Offspring', 2, 'Punk', false, '6:00 pm');
INSERT INTO artists (artistsName, venueID, genre, headliner, timePlaying) VALUES ('Foo Fighters', 3, 'rock', false, '8:30 pm');