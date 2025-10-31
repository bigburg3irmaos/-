// ========================================
// ESTADO DA APLICAÇÃO
// ========================================
let carrinho = [];
const WHATSAPP_NUMBER = "5565992708350";

// Taxas de entrega por bairro (Canelas e Paiaguás grátis, R$ 5,00 até 5km, R$ 10,00 acima de 5km)
const taxasEntrega = {
    "Água Vermelha": 5.00, // 4km
    "Alameda": 10.00, // 10km
    "Canelas": 0.00, // 0km - GRATUITO
    "Capão do Pequi": 10.00, // 12km
    "Capela do Piçarrão": 10.00, // 10km
    "Centro-Norte": 10.00, // 6km
    "Centro": 5.00, // 5km
    "Centro-Sul": 5.00, // 5km
    "Cidade de Deus": 5.00, // 5km
    "Cohab Asa Branca": 5.00, // 4km
    "Cohab Cabo Michel": 10.00, // 7km
    "Cohab Dom Bosco": 10.00, // 10km
    "Cohab Dom Orlando Chaves": 10.00, // 10km
    "Cohab Jaime Campos": 10.00, // 10km
    "Jardim Primavera": 10.00, // 7km
    "Jardim primavera": 5.00, // 4km
    "Cohab Vinte e Quatro de Dezembro": 10.00, // 10km
    "Colinas Verdejantes": 10.00, // 6km
    "Construmat": 10.00, // 10km
    "Costa Verde": 10.00, // 8km
    "Cristo Rei": 10.00, // 10km
    "Figueirinha": 5.00, // 5km
    "Frutal de Minas": 5.00, // 4km
    "Glória": 5.00, // 5km
    "Hélio Ponce de Arruda": 10.00, // 10km
    "Ikaray": 5.00, // 4km
    "Jardim Costa Verde": 10.00, // 7km
    "Jardim das Flores": 10.00, // 7km
    "Jardim de Alá": 10.00, // 6km
    "Jardim dos Estados": 10.00, // 7km
    "Jardim Eldorado": 5.00, // 4km
    "Jardim Esmeralda": 10.00, // 7km
    "Jardim Glória l": 5.00, // 5km
    "Jardim Glória ll": 10.00, // 6km
    "Jardim Ikaraí": 5.00, // 4km
    "Jardim Imperador": 10.00, // 6km
    "Jardim Imperial": 10.00, // 8km
    "Jardim Itororó": 5.00, // 2km
    "Jardim Marajoara": 5.00, // 4km
    "Jardim Maria Izabel": 10.00, // 7km
    "Jardim Mariana": 5.00, // 3km
    "Jardim Maringá": 10.00, // 13km
    "Jardim Novo Horizonte": 5.00, // 5km
    "Novo Mundo": 10.00, // 8km
    "Ouro Verde": 5.00, // 3km
    "Jardim Panorama": 10.00, // 6km
    "Jardim Paula I": 5.00, // 3km
    "Jardim Paula II": 5.00, // 3km
    "Jardim União": 10.00, // 11km
    "Manga": 10.00, // 8km
    "Mapim": 10.00, // 8km
    "Marajoara": 5.00, // 4km
    "Nova Era": 10.00, // 6km
    "Nova Várzea Grande": 5.00, // 4km
    "Paiaguás": 0.00, // 1km - GRATUITO
    "Parque das Mangabeiras": 10.00, // 10km
    "Parque das Nações": 10.00, // 10km
    "Parque Del Rey": 5.00, // 3km
    "Parque do Lago": 10.00, // 12km
    "Parque do Sabiá": 5.00, // 5km
    "Parque Industrial Atlântico": 10.00, // 6km
    "Parque Paiaguás": 0.00, // 1km - GRATUITO
    "Petrópolis": 10.00, // 11km
    "Planalto Ipiranga": 10.00, // 7km
    "Ponte Nova": 10.00, // 8km
    "Quinze de Maio": 10.00, // 10km
    "Santa Cecília": 10.00, // 10km
    "Santa Isabel": 5.00, // 4km
    "Santa Luzia": 10.00, // 13km
    "São Jorge": 10.00, // 7km
    "São Marcos": 10.00, // 7km
    "São Matheus": 5.00, // 4km
    "Vila Arthur": 10.00, // 7km
    "Vila Canaã": 10.00, // 6km
    "Vila Ipase": 10.00, // 7km
    "Vila Maristela": 10.00, // 10km
    "Vila Pirineu": 10.00, // 7km
    "Vila Sadia": 10.00, // 10km
    "Vitória Régia": 10.00 // 11km
};

// ========================================
// ELEMENTOS DO DOM
// ========================================
const orderItemsList = document.getElementById("orderItemsList");
const orderSubtotal = document.getElementById("orderSubtotal");
const orderDeliveryFee = document.getElementById("orderDeliveryFee");
const orderTotalFinal = document.getElementById("orderTotalFinal");
const bairroInput = document.getElementById("bairroInput");
const bairroSelect = document.getElementById("bairroSelect"); // Campo oculto para o valor final
const enderecoInput = document.getElementById("enderecoInput");
const pagamentoSelect = document.getElementById("pagamentoSelect");
const trocoGroup = document.getElementById("trocoGroup");
const trocoInput = document.getElementById("trocoInput");
const noChangeNeeded = document.getElementById("noChangeNeeded");
const observacoesInput = document.getElementById("observacoesInput");
const checkoutForm = document.getElementById("checkoutForm");
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

function popularBairros() {
    const bairrosList = document.getElementById("bairrosList");
    const bairros = Object.keys(taxasEntrega).sort();
    
    bairros.forEach(bairro => {
        const taxa = taxasEntrega[bairro];
        const taxaFormatada = taxa === 0.00 ? "GRÁTIS" : `R$ ${taxa.toFixed(2).replace(".", ",")}`;
        const option = document.createElement('option');
        option.value = `${bairro} (${taxaFormatada})`;
        bairrosList.appendChild(option);
    });
}

function carregarCarrinho() {
    const carrinhoSalvo = localStorage.getItem("carrinho");
    if (carrinhoSalvo) {
        carrinho = JSON.parse(carrinhoSalvo);
    }
}

function salvarCarrinho() {
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

// ========================================
// GERENCIAMENTO DO CARRINHO
// ========================================
function calcularSubtotal() {
    return carrinho.reduce((total, item) => total + (item.preco * item.quantidade), 0);
}

function calcularTaxaEntrega() {
    const bairro = bairroSelect.value;
    return bairro ? (taxasEntrega[bairro] !== undefined ? taxasEntrega[bairro] : 0) : 0;
}

function calcularTotal() {
    return calcularSubtotal() + calcularTaxaEntrega();
}

function atualizarResumo() {
    const subtotal = calcularSubtotal();
    const taxaEntrega = calcularTaxaEntrega();
    const total = calcularTotal();
    
    orderSubtotal.textContent = formatarPreco(subtotal);
    orderDeliveryFee.textContent = formatarPreco(taxaEntrega);
    orderTotalFinal.textContent = formatarPreco(total);
}

function removerItem(index) {
    carrinho.splice(index, 1);
    salvarCarrinho();
    renderizarCarrinho();
    atualizarResumo();
    mostrarToast("❌ Item removido do carrinho", "info");
    
    if (carrinho.length === 0) {
        setTimeout(() => {
            window.location.href = "index.html";
        }, 1500);
    }
}

function alterarQuantidade(index, delta) {
    carrinho[index].quantidade += delta;
    
    if (carrinho[index].quantidade <= 0) {
        removerItem(index);
    } else {
        salvarCarrinho();
        renderizarCarrinho();
        atualizarResumo();
    }
}

function renderizarCarrinho() {
    orderItemsList.innerHTML = "";
    
    if (carrinho.length === 0) {
        orderItemsList.innerHTML = `
            <div style="text-align: center; padding: 40px; color: #999;">
                <p style="font-size: 18px; margin-bottom: 20px;">Seu carrinho está vazio</p>
                <a href="index.html" style="color: #ff6600; text-decoration: none; font-weight: 600;">← Voltar ao cardápio</a>
            </div>
        `;
        return;
    }
    
    carrinho.forEach((item, index) => {
        const cartItem = document.createElement("div");
        cartItem.className = "cart-item";
        
        const descricaoHTML = item.descricao 
            ? `<p>${item.descricao}</p>` 
            : '';
        
        cartItem.innerHTML = `
            <div class="cart-item-info">
                <h4>${item.nome}</h4>
                ${descricaoHTML}
                <p>Quantidade: ${item.quantidade}</p>
            </div>
            <div class="cart-item-price">
                ${formatarPreco(item.preco * item.quantidade)}
            </div>
            <div class="cart-item-actions">
                <button class="btn-quantity" onclick="alterarQuantidade(${index}, -1)">−</button>
                <span style="font-size: 18px; font-weight: 600; color: #fff; min-width: 30px; text-align: center;">${item.quantidade}</span>
                <button class="btn-quantity" onclick="alterarQuantidade(${index}, 1)">+</button>
                <button class="btn-remove" onclick="removerItem(${index})">Remover</button>
            </div>
        `;
        
        orderItemsList.appendChild(cartItem);
    });
}

// ========================================
// GERAÇÃO DA MENSAGEM DO WHATSAPP
// ========================================
function gerarMensagemWhatsApp() {
    const numeroPedido = Math.floor(Math.random() * 9000) + 1000;
    const taxaEntrega = calcularTaxaEntrega();
    const total = calcularTotal();
    const endereco = enderecoInput.value.trim();
    const bairro = bairroSelect.value;
    const observacoes = observacoesInput.value.trim();
    const pagamento = pagamentoSelect.value;
    
    let mensagem = `Pedido Nº ${numeroPedido}\n\n`;
    
    mensagem += "Itens:\n\n";
    carrinho.forEach((item) => {
        mensagem += `${item.quantidade}x ${item.nome}\n`;
    });
    
    mensagem += "\nObservações:\n";
    mensagem += observacoes ? `${observacoes}\n` : "V\n";
    
    mensagem += `\n${pagamento}`;
    
    if (pagamento === "Dinheiro") {
        if (noChangeNeeded.checked) {
            mensagem += " (sem troco)";
        } else if (trocoInput.value) {
            const troco = parseFloat(trocoInput.value);
            mensagem += ` (troco para R$ ${troco.toFixed(2).replace(".", ",")})`;
        }
    }
    mensagem += "\n";
    
    mensagem += `\nDelivery (taxa de: ${formatarPreco(taxaEntrega)})\n`;
    mensagem += `${endereco} - ${bairro}, Várzea Grande\n`;
    mensagem += `(Estimativa: entre 20~50 minutos)\n`;
    
    mensagem += `\nTotal: ${formatarPreco(total)}\n\n`;
    
    mensagem += "Obrigado pela preferência, se precisar de algo é só chamar! 🥳\n\n";
    mensagem += "Por favor, envie sua localização para confirmar o endereço.";
    
    return encodeURIComponent(mensagem);
}

// ========================================
// EVENT LISTENERS
// ========================================
bairroInput.addEventListener("input", () => {
    const bairroComTaxa = bairroInput.value;
    const match = bairroComTaxa.match(/(.*) \((R\$|GRÁTIS)/);
    const bairroNome = match ? match[1].trim() : bairroComTaxa.trim();

    if (taxasEntrega[bairroNome] !== undefined) {
        bairroSelect.value = bairroNome;
    } else {
        bairroSelect.value = "";
    }
    atualizarResumo();
});

pagamentoSelect.addEventListener("change", () => {
    if (pagamentoSelect.value === "Dinheiro") {
        trocoGroup.style.display = "block";
    } else {
        trocoGroup.style.display = "none";
        trocoInput.value = "";
        noChangeNeeded.checked = false;
    }
});

noChangeNeeded.addEventListener("change", () => {
    if (noChangeNeeded.checked) {
        trocoInput.value = "";
        trocoInput.disabled = true;
    } else {
        trocoInput.disabled = false;
    }
});

checkoutForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    if (carrinho.length === 0) {
        mostrarToast("❌ Seu carrinho está vazio!", "error");
        return;
    }
    
    if (!bairroSelect.value) {
        mostrarToast("❌ Selecione um bairro válido!", "error");
        bairroInput.focus();
        return;
    }
    
    if (!enderecoInput.value.trim()) {
        mostrarToast("❌ Informe o endereço completo!", "error");
        enderecoInput.focus();
        return;
    }
    
    if (!pagamentoSelect.value) {
        mostrarToast("❌ Selecione o método de pagamento!", "error");
        pagamentoSelect.focus();
        return;
    }
    
    if (pagamentoSelect.value === "Dinheiro" && !noChangeNeeded.checked && !trocoInput.value) {
        mostrarToast("❌ Informe o valor para troco ou marque 'Não preciso de troco'!", "error");
        trocoInput.focus();
        return;
    }
    
    if (pagamentoSelect.value === "Dinheiro" && trocoInput.value && !noChangeNeeded.checked) {
        const valorTroco = parseFloat(trocoInput.value);
        const total = calcularTotal();
        
        if (valorTroco < total) {
            mostrarToast("❌ O valor do troco deve ser maior que o total do pedido!", "error");
            trocoInput.focus();
            return;
        }
    }
    
    const mensagem = gerarMensagemWhatsApp();
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${mensagem}`;
    
    localStorage.removeItem("carrinho");
    
    window.open(whatsappURL, "_blank");
    
    mostrarToast("✅ Redirecionando para o WhatsApp...", "success");
    
    setTimeout(() => {
        window.location.href = "index.html";
    }, 2000);
});

// ========================================
// INICIALIZAÇÃO
// ========================================
document.addEventListener("DOMContentLoaded", () => {
    carregarCarrinho();
    
    if (carrinho.length === 0) {
        mostrarToast("⚠️ Seu carrinho está vazio! Redirecionando...", "warning");
        setTimeout(() => {
            window.location.href = "index.html";
        }, 2000);
        return;
    }
    
    renderizarCarrinho();
    atualizarResumo();
    popularBairros();
});

window.removerItem = removerItem;
window.alterarQuantidade = alterarQuantidade;
