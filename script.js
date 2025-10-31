// ========================================
// DADOS DO CARDÁPIO
// ========================================
const cardapio = {
    "whatsapp_number": "5565992708350",
    "lanches": [
        {
            "id": "baguncinha-simples",
            "nome": "BAGUNCINHA SIMPLES",
            "descricao": "Pão, hambúrguer, salsicha, mussarela, ovo, presunto, alface e tomate",
            "precos": [
                {"tipo": "Tradicional", "valor": 15.00},
                {"tipo": "Caseiro", "valor": 18.00}
            ]
        },
        {
            "id": "baguncinha-especial",
            "nome": "BAGUNCINHA ESPECIAL",
            "descricao": "Pão, hambúrguer, salsicha, calabresa, bacon, presunto, mussarela, tomate e milho verde",
            "precos": [
                {"tipo": "Tradicional", "valor": 16.00},
                {"tipo": "Caseiro", "valor": 21.00}
            ]
        },
        {
            "id": "x-burguer",
            "nome": "X-BURGUER",
            "descricao": "Pão, hambúrguer, presunto e mussarela",
            "precos": [
                {"tipo": "Tradicional", "valor": 16.00},
                {"tipo": "Caseiro", "valor": 19.00}
            ]
        },
        {
            "id": "x-salada",
            "nome": "X-SALADA",
            "descricao": "Pão, hambúrguer, presunto, mussarela, alface e tomate",
            "precos": [
                {"tipo": "Tradicional", "valor": 14.00},
                {"tipo": "Caseiro", "valor": 17.00}
            ]
        },
        {
            "id": "x-bacon",
            "nome": "X-BACON",
            "descricao": "Pão, hambúrguer, bacon, presunto, mussarela, alface e tomate",
            "precos": [
                {"tipo": "Tradicional", "valor": 20.00},
                {"tipo": "Caseiro", "valor": 24.00}
            ]
        },
        {
            "id": "x-quase-tudo",
            "nome": "X-QUASE TUDO",
            "descricao": "Pão, hambúrguer, ovo, presunto, mussarela, bacon, salsicha, alface, milho, tomate e batata palha",
            "precos": [
                {"tipo": "Tradicional", "valor": 23.00},
                {"tipo": "Caseiro", "valor": 27.00}
            ]
        },
        {
            "id": "big-burg-3-irmaos",
            "nome": "BIG BURG 3 IRMÃOS",
            "descricao": "Pão, 2 hambúrgueres, 2 ovos, presunto, mussarela, bacon, salsicha, calabresa, cheddar, alface, milho, tomate e batata palha",
            "precos": [
                {"tipo": "Tradicional", "valor": 30.00},
                {"tipo": "Caseiro", "valor": 35.00}
            ]
        },
        {
            "id": "bauru",
            "nome": "BAURU",
            "descricao": "Pão, presunto, mussarela e tomate",
            "precos": [
                {"tipo": "Único", "valor": 10.00}
            ]
        },
        {
            "id": "x-frango",
            "nome": "X-FRANGO",
            "descricao": "Pão, filé de frango, presunto, mussarela, tomate e milho verde",
            "precos": [
                {"tipo": "Único", "valor": 21.00}
            ]
        },
        {
            "id": "x-calabresa",
            "nome": "X-CALABRESA",
            "descricao": "Pão, calabresa, presunto, mussarela e tomate",
            "precos": [
                {"tipo": "Único", "valor": 21.00}
            ]
        },
        {
            "id": "x-file",
            "nome": "X-FILÉ",
            "descricao": "Pão, filé de carne, cheddar, milho, presunto, mussarela e tomate",
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
                {"tipo": "Único", "valor": 3.00}
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
// ESTADO DA APLICAÇÃO
// ========================================
let carrinho = [];

// ========================================
// ELEMENTOS DO DOM
// ========================================
const proceedToCheckoutFloat = document.getElementById("proceedToCheckoutFloat");
const proceedToCheckoutBtn = document.getElementById("proceedToCheckoutBtn");
const cartCountSpan = document.getElementById("cartCount");
const toastElement = document.getElementById("toast");

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

// ========================================
// GERENCIAMENTO DO CARRINHO
// ========================================
function adicionarAoCarrinho(nome, descricao, preco, tipo) {
    const nomeCompleto = tipo && tipo !== "Único" ? `${nome} (${tipo})` : nome;
    
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
    
    atualizarCarrinho();
    mostrarToast("✅ Item adicionado ao carrinho!", "success");
    
    // Animação do botão de carrinho
    if (proceedToCheckoutFloat.style.display === "none") {
        proceedToCheckoutFloat.style.display = "block";
    }
}

function atualizarCarrinho() {
    const totalItens = carrinho.reduce((sum, item) => sum + item.quantidade, 0);
    cartCountSpan.textContent = totalItens;
    
    salvarCarrinho();
    
    if (carrinho.length === 0) {
        proceedToCheckoutFloat.style.display = "none";
    } else {
        proceedToCheckoutFloat.style.display = "block";
    }
}

// ========================================
// CRIAÇÃO DE CARDS DE PRODUTOS
// ========================================
function criarCardProduto(produto) {
    const card = document.createElement("div");
    card.className = "product-card";
    
    let precosHTML = "";
    let hasMultiplePrices = produto.precos.length > 1;
    
    if (hasMultiplePrices) {
        precosHTML = `
            <div class="product-prices">
                ${produto.precos.map(preco => `
                    <div class="price-option" data-id="${produto.id}" data-tipo="${preco.tipo}" data-valor="${preco.valor}">
                        <span class="price-label">${preco.tipo}</span>
                        <span class="price-value">${formatarPreco(preco.valor)}</span>
                    </div>
                `).join("")}
            </div>
        `;
    } else {
        precosHTML = `
            <div class="price-single" data-id="${produto.id}" data-tipo="${produto.precos[0].tipo}" data-valor="${produto.precos[0].valor}">
                <span class="price-value">${formatarPreco(produto.precos[0].valor)}</span>
            </div>
        `;
    }
    
    const descricaoHTML = produto.descricao 
        ? `<p class="product-description">${produto.descricao}</p>` 
        : '';
    
    card.innerHTML = `
        <h3 class="product-name">${produto.nome}</h3>
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
        // Para itens com preço único (bebidas, adicionais), o clique é no container do preço
        const priceSingle = card.querySelector(".price-single");
        if (priceSingle) {
            priceSingle.addEventListener("click", (event) => {
                event.stopPropagation();
                const tipo = priceSingle.dataset.tipo;
                const valor = parseFloat(priceSingle.dataset.valor);
                adicionarAoCarrinho(produto.nome, produto.descricao, valor, tipo);
                
                // Feedback visual
                priceSingle.style.transform = "scale(0.95)";
                setTimeout(() => {
                    priceSingle.style.transform = "";
                }, 200);
            });
        }
    }
    
    return card;
}

// ========================================
// RENDERIZAÇÃO DOS PRODUTOS
// ========================================
function renderizarProdutos() {
    const lanchesGrid = document.getElementById("lanchesGrid");
    const bebidasGrid = document.getElementById("bebidasGrid");
    const adicionaisGrid = document.getElementById("adicionaisGrid");
    
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
    atualizarCarrinho();
    
    // Event listener para botão de checkout
    proceedToCheckoutBtn.addEventListener("click", () => {
        window.location.href = "checkout.html";
    });
    
    // Animação de entrada dos cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);
    
    document.querySelectorAll(".product-card").forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";
        card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        observer.observe(card);
    });
});
