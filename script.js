// ========================================
// DADOS DO CARDÁPIO
// ========================================
const cardapio = {
    "whatsapp_number": "5565992708350",
    "lanches": [
        {
            "id": "baguncinha-simples",
            "nome": "BAGUNCINHA SIMPLES",
            "descricao": "Pão, hambúrguer, salsicha, presunto, mussarela.",
            "precos": [
                {"tipo": "Tradicional", "valor": 15.00},
                {"tipo": "Caseiro", "valor": 18.00}
            ]
        },
        {
            "id": "baguncinha-especial",
            "nome": "BAGUNCINHA ESPECIAL",
            "descricao": "Pão, hambúrguer, salsicha, calabresa, bacon, presunto, mussarela.",
            "precos": [
                {"tipo": "Tradicional", "valor": 16.00},
                {"tipo": "Caseiro", "valor": 21.00}
            ]
        },
        {
            "id": "x-burguer",
            "nome": "X-BURGUER",
            "descricao": "Pão, 2 hambúrguer, presunto, mussarela.",
            "precos": [
                {"tipo": "Tradicional", "valor": 16.00},
                {"tipo": "Caseiro", "valor": 19.00}
            ]
        },
        {
            "id": "x-salada",
            "nome": "X-SALADA",
            "descricao": "Pão, hambúrguer, presunto, mussarela, alface e tomate.",
            "precos": [
                {"tipo": "Tradicional", "valor": 14.00},
                {"tipo": "Caseiro", "valor": 17.00}
            ]
        },
        {
            "id": "x-bacon",
            "nome": "X-BACON",
            "descricao": "Pão, hambúrguer, bacon, presunto, mussarela, salsicha, alface, tomate, milho e batata palha.",
            "precos": [
                {"tipo": "Tradicional", "valor": 20.00},
                {"tipo": "Caseiro", "valor": 24.00}
            ]
        },
        {
            "id": "x-quase-tudo",
            "nome": "X-QUASE TUDO",
            "descricao": "Pão, hambúrguer, ovo, presunto, mussarela, bacon, salsicha, alface, milho, tomate e batata palha.",
            "precos": [
                {"tipo": "Tradicional", "valor": 23.00},
                {"tipo": "Caseiro", "valor": 27.00}
            ]
        },
        {
            "id": "big-burg-3-irmaos",
            "nome": "BIG BURG 3 IRMÃOS",
            "descricao": "Pão, 2 hambúrgueres, 2 ovos, presunto, mussarela, bacon, salsicha, calabresa, cheddar, alface, milho, tomate e batata palha.",
            "precos": [
                {"tipo": "Tradicional", "valor": 30.00},
                {"tipo": "Caseiro", "valor": 35.00}
            ]
        },
        {
            "id": "bauru",
            "nome": "BAURU",
            "descricao": "Pão, presunto, mussarela e tomate.",
            "precos": [
                {"tipo": "Único", "valor": 10.00}
            ]
        },
        {
            "id": "x-frango",
            "nome": "X-FRANGO",
            "descricao": "Pão, filé de frango, milho, presunto, alface, tomate, batata palha e milho.",
            "precos": [
                {"tipo": "Único", "valor": 21.00}
            ]
        },
        {
            "id": "x-calabresa",
            "nome": "X-CALABRESA",
            "descricao": "Pão, hambúrguer, calabresa, presunto, mussarela, alface e tomate.",
            "precos": [
                {"tipo": "Único", "valor": 21.00}
            ]
        },
        {
            "id": "x-file",
            "nome": "X-FILÉ",
            "descricao": "Pão, filé de carne, cheddar, milho, presunto, mussarela e tomate.",
            "precos": [
                {"tipo": "Único", "valor": 25.00}
            ]
        }
    ],
    "bebidas": [
        {
            "id": "coca-cola-1l",
            "nome": "COCA COLA 1L",
            "descricao": "",
            "precos": [
                {"tipo": "Único", "valor": 10.00}
            ]
        },
        {
            "id": "coca-cola-1-5l",
            "nome": "COCA COLA 1,5L",
            "descricao": "",
            "precos": [
                {"tipo": "Único", "valor": 12.00}
            ]
        },
        {
            "id": "coca-cola-350ml",
            "nome": "COCA COLA 350ML",
            "descricao": "",
            "precos": [
                {"tipo": "Único", "valor": 6.00}
            ]
        },
        {
            "id": "guarana-1l",
            "nome": "GUARANÁ 1L",
            "descricao": "",
            "precos": [
                {"tipo": "Único", "valor": 7.00}
            ]
        },
        {
            "id": "guarana-350ml",
            "nome": "GUARANÁ 350ML",
            "descricao": "",
            "precos": [
                {"tipo": "Único", "valor": 4.00}
            ]
        },
        {
            "id": "agua-mineral",
            "nome": "ÁGUA MINERAL",
            "descricao": "",
            "precos": [
                {"tipo": "Único", "valor": 3.00}
            ]
        },
        {
            "id": "agua-c-gas",
            "nome": "ÁGUA C/ GÁS",
            "descricao": "",
            "precos": [
                {"tipo": "Único", "valor": 4.00}
            ]
        }
    ],
    "adicionais": [
        {
            "id": "hamburguer",
            "nome": "HAMBURGUER",
            "precos": [
                {"tipo": "Único", "valor": 3.00}
            ]
        },
        {
            "id": "hamburguer-caseiro",
            "nome": "HAMBURGUER CASEIRO",
            "precos": [
                {"tipo": "Único", "valor": 5.00}
            ]
        },
        {
            "id": "salsicha",
            "nome": "SALSICHA",
            "precos": [
                {"tipo": "Único", "valor": 2.00}
            ]
        },
        {
            "id": "calabresa",
            "nome": "CALABRESA",
            "precos": [
                {"tipo": "Único", "valor": 3.50}
            ]
        },
        {
            "id": "mussarela",
            "nome": "MUSSARELA",
            "precos": [
                {"tipo": "Único", "valor": 3.00}
            ]
        },
        {
            "id": "bacon",
            "nome": "BACON",
            "precos": [
                {"tipo": "Único", "valor": 4.00}
            ]
        },
        {
            "id": "ovo",
            "nome": "OVO",
            "precos": [
                {"tipo": "Único", "valor": 2.00}
            ]
        },
        {
            "id": "cheddar",
            "nome": "CHEDDAR",
            "precos": [
                {"tipo": "Único", "valor": 3.50}
            ]
        }
    ]
};

// ========================================
// ELEMENTOS DO DOM
// ========================================
const lanchesGrid = document.getElementById("lanchesGrid");
const bebidasGrid = document.getElementById("bebidasGrid");
const adicionaisGrid = document.getElementById("adicionaisGrid");
const contadorCarrinho = document.getElementById("cartCount");
const proceedToCheckoutFloat = document.getElementById("proceedToCheckoutFloat");
const proceedToCheckoutBtn = document.getElementById("proceedToCheckoutBtn");
const toastElement = document.getElementById("toast");

// ========================================
// ESTADO DA APLICAÇÃO
// ========================================
let carrinho = [];

// ========================================
// FUNÇÕES UTILITÁRIAS
// ========================================
function formatarPreco(valor) {
    return `R$ ${valor.toFixed(2).replace(".", ",")}`;
}

function mostrarToast(mensagem, tipo = "success") {
    toastElement.textContent = mensagem;
    toastElement.classList.add("show");
    
    setTimeout(() => {
        toastElement.classList.remove("show");
    }, 3000);
}

function salvarCarrinho() {
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

function carregarCarrinho() {
    const carrinhoSalvo = localStorage.getItem("carrinho");
    if (carrinhoSalvo) {
        carrinho = JSON.parse(carrinhoSalvo);
    }
}

function atualizarContadorCarrinho() {
    const totalItens = carrinho.reduce((total, item) => total + item.quantidade, 0);
    const totalPreco = carrinho.reduce((total, item) => total + (item.preco * item.quantidade), 0);
    
    contadorCarrinho.textContent = totalItens;
    
    if (totalItens > 0) {
        proceedToCheckoutFloat.style.display = "block";
        contadorCarrinho.classList.add("has-items");
        contadorCarrinho.title = `Total: R$ ${totalPreco.toFixed(2).replace(".", ",")}`;
    } else {
        proceedToCheckoutFloat.style.display = "none";
        contadorCarrinho.classList.remove("has-items");
        contadorCarrinho.title = "Carrinho vazio";
    }
}

// ========================================
// GERENCIAMENTO DO CARRINHO
// ========================================
function adicionarAoCarrinho(nome, descricao, preco, tipo = "") {
    const nomeCompleto = tipo ? `${nome} (${tipo})` : nome;
    
    const itemExistente = carrinho.find(item => item.nome === nomeCompleto);
    
    if (itemExistente) {
        itemExistente.quantidade++;
    } else {
        carrinho.push({
            nome: nomeCompleto,
            descricao: descricao,
            preco: preco,
            quantidade: 1
        });
    }
    
    salvarCarrinho();
    atualizarContadorCarrinho();
    mostrarToast(`✅ ${nomeCompleto} adicionado ao carrinho!`);
}

// ========================================
// RENDERIZAÇÃO DOS PRODUTOS
// ========================================
function criarCardProduto(produto) {
    const card = document.createElement("div");
    card.className = "product-card";
    card.setAttribute("data-aos", "fade-up");
    
    const hasMultiplePrices = produto.precos.length > 1;
    
    let precosHTML = "";
    if (hasMultiplePrices) {
        precosHTML = `
            <div class="price-options">
                <div class="price-option" data-tipo="${produto.precos[0].tipo}" data-valor="${produto.precos[0].valor}">
                    <span class="price-type">${produto.precos[0].tipo}</span>
                    <span class="price-value">${formatarPreco(produto.precos[0].valor)}</span>
                </div>
                <div class="price-option" data-tipo="${produto.precos[1].tipo}" data-valor="${produto.precos[1].valor}">
                    <span class="price-type">${produto.precos[1].tipo}</span>
                    <span class="price-value">${formatarPreco(produto.precos[1].valor)}</span>
                </div>
            </div>
        `;
    } else {
        precosHTML = `
            <div class="price-single" data-tipo="${produto.precos[0].tipo}" data-valor="${produto.precos[0].valor}">
                <span class="price-value">${formatarPreco(produto.precos[0].valor)}</span>
            </div>
        `;
    }
    
    const descricaoHTML = produto.descricao 
        ? `<p class="product-description">${produto.descricao}</p>` 
        : '';
    
    card.innerHTML = `
        <h3 class="product-name">${produto.nome}</h3>
        ${descricaoHTML}
       ${precosHTML}
    `;
    
    // Event listeners para adicionar ao carrinho
    if (hasMultiplePrices) {
        // Para itens com múltiplas opções (ex: Industrial/Caseiro), o clique é no item de preço
        const priceOptions = card.querySelectorAll(".price-option");
        priceOptions.forEach(option => {
            option.addEventListener("click", (event) => {
                event.stopPropagation();
                const tipo = option.dataset.tipo;
                const valor = parseFloat(option.dataset.valor);
                adicionarAoCarrinho(produto.nome, produto.descricao, valor, tipo);
                
                // Feedback visual
                option.style.transform = "scale(0.95)";
                setTimeout(() => {
                    option.style.transform = "";
                }, 200);
            });
        });
    } else {
        // Para itens com preço único (bebidas, adicionais), o clique é no card inteiro
        card.addEventListener("click", (event) => {
            event.stopPropagation();
            const priceSingle = card.querySelector(".price-single");
            const tipo = priceSingle.dataset.tipo;
            const valor = parseFloat(priceSingle.dataset.valor);
            adicionarAoCarrinho(produto.nome, produto.descricao, valor, tipo);
            
            // Feedback visual
            card.style.transform = "scale(0.95)";
            setTimeout(() => {
                card.style.transform = "";
            }, 200);
        });
    }
    
    return card;
}

function renderizarProdutos() {
    const lanchesGrid = document.getElementById("lanchesGrid");
    const bebidasGrid = document.getElementById("bebidasGrid");
    const adicionaisGrid = document.getElementById("adicionaisGrid");
    
    // Limpar grids
    lanchesGrid.innerHTML = "";
    bebidasGrid.innerHTML = "";
    adicionaisGrid.innerHTML = "";
    
    // Renderizar lanches
    cardapio.lanches.forEach((lanche, index) => {
        const card = criarCardProduto(lanche);
        card.style.animationDelay = `${index * 0.1}s`;
        lanchesGrid.appendChild(card);
    });
    
    // Renderizar bebidas
    cardapio.bebidas.forEach((bebida, index) => {
        const card = criarCardProduto(bebida);
        card.style.animationDelay = `${index * 0.1}s`;
        bebidasGrid.appendChild(card);
    });
    
    // Renderizar adicionais
    cardapio.adicionais.forEach((adicional, index) => {
        const card = criarCardProduto(adicional);
        card.style.animationDelay = `${index * 0.1}s`;
        adicionaisGrid.appendChild(card);
    });
}

// ========================================
// SCROLL SUAVE
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========================================
// INICIALIZAÇÃO
// ========================================
document.addEventListener("DOMContentLoaded", () => {
    // Carregar carrinho salvo
    carregarCarrinho();
    
    // Renderizar produtos
    renderizarProdutos();
    
    // Atualizar UI do carrinho
    atualizarContadorCarrinho();
    
    // Event listener para botão de checkout
    proceedToCheckoutBtn.addEventListener("click", () => {
        window.location.href = "checkout.html";
    });
    
    // Animação de entrada dos cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("aos-animate");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('[data-aos]').forEach(element => {
        observer.observe(element);
    });
});

// Expor funções para uso no HTML (onclick)
window.adicionarAoCarrinho = adicionarAoCarrinho;
window.formatarPreco = formatarPreco;
