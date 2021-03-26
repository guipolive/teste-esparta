--- Feito por: Guilherme Passos de Oliveira, utilizando sintaxe PLSQL

-- Buscar os nomes de todos os alunos que frequentam alguma turma do professor 'JOAO PEDRO'.
	select distinct Nome
	from ALUNO a
	inner join ALUNO_TURMA at on a.id = at.aluno_id
	inner join TURMA t on at.turma_id = t.id
	inner join PROFESSOR p on p.id = t.PROFESSOR_id
	where p.nome = 'JOAO PEDRO'

-- Buscar os dias da semana que tenham aulas da disciplina 'MATEMATICA'.
	select distinct dia_da_semana
	from TURMA t
	inner join disciplina d on t.DISCIPLINA_id = d.id
	where d.nome = 'MATEMATICA'

-- Buscar todos os alunos que frequentem aulas de 'MATEMATICA' e também 'FISICA'.
	select distinct Nome
	from ALUNO a
	inner join ALUNO_TURMA at on a.id = at.aluno_id
	inner join TURMA t on at.turma_id = t.id
	inner join DISCIPLINA d on t.DISCIPLINA_id = d.id
	where d.nome = 'MATEMATICA' or d.nome = 'FISICA'

-- Buscar as disciplinas que não tenham nenhuma turma.
	select *
	from DISCIPLINA d
	left join TURMA t on t.DISCIPLINA_id = d.id
	where t.DISCIPLINA_id is null

-- Buscar os alunos que frequentem aulas de 'MATEMATICA' exceto os que frequentem 'QUIMICA'.
	select distinct Nome
	from ALUNO a
	inner join ALUNO_TURMA at on a.id = at.aluno_id
	inner join TURMA t on at.turma_id = t.id
	inner join DISCIPLINA d on t.DISCIPLINA_id = d.id
	where d.nome = 'MATEMATICA' 
	and NOT EXISTS (
		select distinct Nome
		from ALUNO a
		inner join ALUNO_TURMA at on a.id = at.aluno_id
		inner join TURMA t on at.turma_id = t.id
		inner join DISCIPLINA d on t.DISCIPLINA_id = d.id
		where d.nome = 'QUIMICA'
	)
