/**
 * PC.4 — Progressão Geométrica em TypeScript
 * ============================================
 * Cada termo a partir do 2º é obtido multiplicando
 * o anterior pela razão (q).
 *
 * Fórmula do termo geral: aₙ = a₁ × q^(n−1)
 */

// ── TIPOS ────────────────────────────────────────────────────────────

type TipoPG = "Crescente" | "Decrescente" | "Constante" | "Alternante";

interface InfoPG {
    primeiroTermo: number;
    razao: number;
    tipo: TipoPG;
}

interface ResultadoTermos {
    termos: number[];
    soma: number;
    quantidade: number;
}

// ── CLASSE ───────────────────────────────────────────────────────────

class ProgressaoGeometrica {
    private readonly primeiroTermo: number;
    private readonly razao: number;

    /**
     * @param primeiroTermo  Valor de a₁ (primeiro termo da sequência)
     * @param razao          Valor de q  (constante multiplicadora)
     */
    constructor(primeiroTermo: number, razao: number) {
        if (razao === 0) {
            throw new Error("❌ A razão (q) não pode ser zero em uma PG!");
        }
        this.primeiroTermo = primeiroTermo;
        this.razao = razao;
    }

    // ── GETTERS ────────────────────────────────────────────────────────

    get a1(): number {
        return this.primeiroTermo;
    }

    get q(): number {
        return this.razao;
    }

    // ── MÉTODOS ────────────────────────────────────────────────────────

    /**
     * Calcula o enésimo termo usando a fórmula direta: aₙ = a₁ × q^(n−1)
     * @param n  Posição do termo desejado (começa em 1)
     */
    calcularTermo(n: number): number {
        if (n < 1 || !Number.isInteger(n)) {
            throw new Error("❌ A posição deve ser um inteiro maior ou igual a 1!");
        }
        return this.primeiroTermo * Math.pow(this.razao, n - 1);
    }

    /**
     * Gera um array com os primeiros N termos da PG
     * @param quantidade  Quantos termos gerar
     */
    gerarTermos(quantidade: number): number[] {
        if (quantidade < 1) {
            throw new Error("❌ A quantidade deve ser maior ou igual a 1!");
        }
        return Array.from({ length: quantidade }, (_, i) =>
            this.calcularTermo(i + 1)
        );
    }

    /**
     * Calcula a soma dos primeiros N termos
     * Fórmula: S = a₁ × (qⁿ − 1) / (q − 1)  →  se q ≠ 1
     *          S = a₁ × n                      →  se q = 1
     */
    calcularSoma(quantidade: number): number {
        if (this.razao === 1) {
            return this.primeiroTermo * quantidade;
        }
        return (
            (this.primeiroTermo * (Math.pow(this.razao, quantidade) - 1)) /
            (this.razao - 1)
        );
    }

    /**
     * Retorna os termos e a soma em um objeto estruturado
     */
    obterResultado(quantidade: number): ResultadoTermos {
        const termos = this.gerarTermos(quantidade);
        const soma = this.calcularSoma(quantidade);
        return { termos, soma, quantidade };
    }

    /**
     * Identifica o tipo da progressão geométrica
     */
    obterTipo(): TipoPG {
        if (this.razao > 1) return "Crescente";
        if (this.razao === 1) return "Constante";
        if (this.razao > 0) return "Decrescente";
        return "Alternante";
    }

    /**
     * Retorna um resumo das informações da PG
     */
    obterInfo(): InfoPG {
        return {
            primeiroTermo: this.primeiroTermo,
            razao: this.razao,
            tipo: this.obterTipo(),
        };
    }

    /**
     * Exibe os primeiros N termos formatados no console
     */
    exibir(quantidade: number): void {
        const info = this.obterInfo();
        const { termos, soma } = this.obterResultado(quantidade);

        console.log("\n" + "=".repeat(52));
        console.log("       📊 PROGRESSÃO GEOMÉTRICA");
        console.log("=".repeat(52));
        console.log(`  Primeiro termo (a₁) : ${info.primeiroTermo}`);
        console.log(`  Razão          (q)  : ${info.razao}`);
        console.log(`  Tipo                : ${info.tipo}`);
        console.log("=".repeat(52));
        console.log(`\n  📋 Primeiros ${quantidade} termos:\n`);

        termos.forEach((termo, index) => {
            const valor =
                Number.isInteger(termo) ? termo : parseFloat(termo.toFixed(6));
            console.log(`    a${(index + 1).toString().padStart(2)} = ${valor}`);
        });

        console.log("\n" + "=".repeat(52));
        console.log(`  ∑ Soma dos ${quantidade} termos: ${parseFloat(soma.toFixed(6))}`);
        console.log("=".repeat(52));
    }
}

// ── DEMONSTRAÇÕES ────────────────────────────────────────────────────

console.log("\n🔺 EXEMPLO 1 — PG CRESCENTE (a₁=2, q=3)");
const pg1 = new ProgressaoGeometrica(2, 3);
pg1.exibir(50);

console.log("\n🔻 EXEMPLO 2 — PG DECRESCENTE (a₁=100, q=0.5)");
const pg2 = new ProgressaoGeometrica(100, 0.5);
pg2.exibir(10);

console.log("\n🔄 EXEMPLO 3 — PG ALTERNANTE (a₁=1, q=-2)");
const pg3 = new ProgressaoGeometrica(1, -2);
pg3.exibir(10);

console.log("\n🎯 EXEMPLO 4 — TERMOS ESPECÍFICOS (a₁=5, q=2)");
const pg4 = new ProgressaoGeometrica(5, 2);
console.log("\n  PG com a₁=5 e q=2:");
[1, 5, 10, 25, 50].forEach((pos) => {
    console.log(`    Termo a${pos} = ${pg4.calcularTermo(pos)}`);
});

// ── TIPAGEM EXTRA — uso avançado ─────────────────────────────────────

console.log("\n📦 EXEMPLO 5 — Objeto estruturado (ResultadoTermos)");
const pg5 = new ProgressaoGeometrica(3, 4);
const resultado: ResultadoTermos = pg5.obterResultado(5);
console.log("\n  Resultado tipado:", resultado);

const info: InfoPG = pg5.obterInfo();
console.log("  Info tipada:     ", info);