import { Cliente } from "./Cliente.js";
import { Gerente } from "./funcionario/Gerente.js";
import { Diretor } from "./funcionario/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 22233344456);
diretor.cadastrarSenha("123456");

const gerente = new Gerente("Ricardo",  5000, 33344455567);
gerente.cadastrarSenha("123");

const cliente = new Cliente("Lais", 22255577787, "456");

const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "456");


console.log(gerenteEstaLogado);
console.log(diretorEstaLogado);
console.log(clienteEstaLogado);