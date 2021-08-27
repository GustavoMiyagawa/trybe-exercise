-- 1: Utilizando o INNER JOIN , encontre as vendas nacionais ( domestic_sales ) e internacionais ( international_sales ) de cada filme.
select mov.title, box.domestic_sales, box.international_sales
from Pixar.Movies as mov
inner join Pixar.BoxOffice as box
on mov.id = box.movie_id;

-- 2: Utilizando o INNER JOIN , faça uma busca que retorne o número de vendas para cada filme que possui um número maior de vendas internacionais ( international_sales ) do que vendas nacionais ( domestic_sales ).
select mov.title, box.domestic_sales, box.international_sales
from Pixar.Movies as mov
inner join Pixar.BoxOffice as box
on mov.id = box.movie_id
where box.international_sales > box.domestic_sales;

-- 3: Utilizando o INNER JOIN , faça uma busca que retorne os filmes e sua avaliação ( rating ) em ordem decrescente.
select mov.title, box.rating
from Pixar.Movies as mov
inner join Pixar.BoxOffice as box
on mov.id = box.movie_id
order by box.rating desc;

-- 4: Utilizando o LEFT JOIN , faça uma busca que retorne todos os dados dos cinemas, mesmo os que não possuem filmes em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética.
select thea.name, thea.location, mov.title, mov.director, mov.year, mov.length_minutes
from Pixar.Theater as thea
left join Pixar.Movies as mov
on mov.theater_id = thea.id
order by thea.name;


