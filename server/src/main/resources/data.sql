INSERT INTO movies (movie_name, poster_url) VALUES
('Interstellar', 'https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg'),
('Inception', 'https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg'),
('The Dark Knight', 'https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg'),
('The Shawshank Redemption', 'https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg'),
('Avengers: Endgame', 'https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg'),
('Oppenheimer', 'https://upload.wikimedia.org/wikipedia/en/4/4a/Oppenheimer_%28film%29.jpg'),
('Spider-Man: No Way Home', 'https://upload.wikimedia.org/wikipedia/en/0/00/Spider-Man_No_Way_Home_poster.jpg'),
('3 Idiots', 'https://upload.wikimedia.org/wikipedia/en/d/df/3_idiots_poster.jpg'),
('Dangal', 'https://upload.wikimedia.org/wikipedia/en/9/99/Dangal_Poster.jpg'),
('Zindagi Na Milegi Dobara', 'https://upload.wikimedia.org/wikipedia/en/1/17/Zindagi_Na_Milegi_Dobara.jpg')
ON CONFLICT (movie_name) DO NOTHING;