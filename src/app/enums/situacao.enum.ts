export enum Situacao {
    DEFAULT = -1,
	CADSTRO_EM_ANDAMENTO = 0,
	SUBMETIDO = 1,
	CADASTRADO = 2,
	DISTRIBUIDO_PARA_AVALIACAO_AUTOMATICAMENTE = 3,
	AVALIAÇAO_INSUFICIENTE = 4,
	DISTRIBUIDO_PARA_AVALIACAO_MANUALEMTE = 5,
	APROVADO =  6,
	EM_EXECUCAO = 7,
	FINALIZADO_RENOVADO = 8,
	FINALIZADO = 9,
	REPROVADO = 10,
	DESATIVADO = 11,
	EXCLUIDO = 12,
	FINALIZADO_COM_PENDENCIAS = 13
}