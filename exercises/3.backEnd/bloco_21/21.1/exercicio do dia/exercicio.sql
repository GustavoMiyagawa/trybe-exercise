-- 1. Escreva uma query que exiba o maior salário da tabela.
select max(salary) from hr.employees;

-- 2. Escreva uma query que exiba a diferença entre o maior e o menor salário.
select max(salary) - min(salary) from hr.employees;

-- 3. Escreva uma query que exiba a média salarial de cada JOB_ID , ordenando pela média salarial em ordem decrescente.
select job_id, avg(SALARY) as media_salarial
from hr.employees
group by JOB_ID
order by media_salarial desc;

-- 4. Escreva uma query que exiba a quantidade de dinheiro necessária para realizar o pagamento de todas as pessoas funcionárias.
select sum(salary) from hr.employees;

-- 5. Escreva uma query que exiba quatro informações: o maior salário, o menor salário,
--  a soma de todos os salários e a média dos salários. Todos os valores devem ser formatados para ter apenas duas casas decimais.
select round(max(salary), 2), round(min(salary), 2), round(sum(salary), 2), round(avg(salary), 2)
from hr.employees;

-- 6. Escreva uma query que exiba a quantidade de pessoas que trabalham como pessoas programadoras ( IT_PROG ).
select job_id, count(*) as 'total'
from hr.employees
group by job_id
having job_id = 'IT_PROG';

-- 7. Escreva uma query que exiba a quantidade de dinheiro necessária para efetuar o pagamento de cada profissão ( JOB_ID ).
select job_id, sum(salary), count(*) as 'total'
from hr.employees
group by job_id;

-- 8. Utilizando a query anterior, faça as alterações para que seja exibido somente
-- a quantidade de dinheiro necessária para cobrir a folha de pagamento das pessoas programadoras ( IT_PROG ).
select job_id, sum(salary), count(*) as 'total'
from hr.employees
group by job_id
having job_id = 'IT_PROG';

-- 9. Escreva uma query que exiba em ordem decrescente a média salarial de todos os cargos, exceto das pessoas programadoras ( IT_PROG ).
select job_id, avg(salary) as media_salarial
from hr.employees
group by job_id
having job_id <> 'IT_PROG'
order by media_salarial desc;

-- 10. Escreva um query que exiba média salarial e o número de funcionários de todos os departamentos com mais de dez funcionários. Dica: agrupe pelo department_id .
select department_id, count(*) as numero_de_funcionario, avg(salary) as media_salarial
from hr.employees
group by department_id
having numero_de_funcionario > 10;

-- 11. Escreva uma query que atualize a coluna PHONE_NUMBER , de modo que todos os telefones iniciados por 515 agora devem iniciar com 777 .
SET SQL_SAFE_UPDATES = 0;

update hr.employees
set phone_number= replace(phone_number, 515, 777)
where left(phone_number, 3) = 515;
-- ou
UPDATE hr.employees
SET phone_number = REPLACE(phone_number, '515', '777')
WHERE phone_number LIKE '515%';
