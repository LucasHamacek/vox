const serviceDetails = [
    {
        title: "Coordenação e Compatibilização",
        text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
        img: "image/consultoria.jpg"
    },
    {
        title: "Modelagem BIM",
        text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
        img: "image/consultoria.jpg"
    },
    {
        title: "Planejamento e Controle 4D",
        text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
        img: "image/consultoria.jpg"
    },
    {
        title: "Quantitativos e Orçamento 5D",
        text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
        img: "image/consultoria.jpg"
    },
    {
        title: "Modelagem por Nuvem de Pontos",
        text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
        img: "image/consultoria.jpg"
    },
    {
        title: "Consultoria e Treinamentos",
        text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
        img: "image/consultoria.jpg"
    }
];

const serviceClients = [
    // Para cada serviço, um array de empresas (ou vazio)
    // Serviço 1
    [
        { src: 'logos/gerdau-logo-mini.svg', alt: 'Gerdau' },
        { src: 'logos/usiminas-logo-mini.svg', alt: 'Usiminas' },
        { src: 'logos/h5-logo-mini.svg', alt: 'Head5 Engenharia' }
    ],
    // Serviço 2
    [
        { src: 'logos/draft-logo-mini.svg', alt: 'Draft Solutions' }
    ],
    // Serviço 3
    [
        { src: 'logos/h5-logo-mini.svg', alt: 'Head5 Engenharia' }
    ],
    // Serviço 4
    [
        { src: 'logos/horizonte-logo-mini.svg', alt: 'Horizonte Minerals' },
        { src: 'logos/draft-logo-mini.svg', alt: 'Draft Solutions' }
    ],
    // Serviço 5
    [
        { src: 'logos/arcelor-logo-mini.svg', alt: 'ArcelorMittal' },
        { src: 'logos/draft-logo-mini.svg', alt: 'Draft Solutions' }
    ],
    // Serviço 6
    [
        { src: 'logos/h5-logo-mini.svg', alt: 'Head5 Engenharia' }
    ]
];

const modal = document.getElementById('serviceModal');
const modalContent = modal.querySelector('div.bg-white');
const closeModalBtn = document.getElementById('closeModal');

function openModal(idx) {
    document.getElementById('modalTitle').textContent = serviceDetails[idx].title;
    document.getElementById('modalText').textContent = serviceDetails[idx].text;
    document.getElementById('modalImg').src = serviceDetails[idx].img;
    document.getElementById('serviceModal').classList.remove('hidden');
    document.body.classList.add('overflow-hidden'); // Esconde a barra de rolagem do body
    modal.classList.remove('hidden');
    modalContent.classList.remove('animate-slideDown', 'animate-fadeOutScale', 'animate-slideUp', 'animate-fadeInScale');
    if (window.innerWidth >= 768) {
        modalContent.classList.add('animate-fadeInScale');
    } else {
        modalContent.classList.add('animate-slideUp');
    }

    const clients = serviceClients[idx] || [];
    const modalClients = document.getElementById('modalClients');
    modalClients.innerHTML = clients.length
        ? clients.map(c => `<img src="${c.src}" alt="${c.alt}" class="w-10 h-10 rounded-full object-contain" />`).join('')
        : '<span class="text-gray-400 text-sm">Nenhuma empresa cadastrada para este serviço.</span>';

    document.getElementById('serviceModal').classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
    modal.classList.remove('hidden');
    modalContent.classList.remove('animate-slideDown', 'animate-fadeOutScale', 'animate-slideUp', 'animate-fadeInScale');
    if (window.innerWidth >= 768) {
        modalContent.classList.add('animate-fadeInScale');
    } else {
        modalContent.classList.add('animate-slideUp');
    }
}

function closeModal() {
    modalContent.classList.remove('animate-slideUp', 'animate-fadeInScale');
    if (window.innerWidth >= 768) {
        modalContent.classList.add('animate-fadeOutScale');
    } else {
        modalContent.classList.add('animate-slideDown');
    }
    modalContent.addEventListener('animationend', function handler() {
        modal.classList.add('hidden');
        modalContent.classList.remove('animate-slideDown', 'animate-fadeOutScale');
        modalContent.removeEventListener('animationend', handler);
    });
    document.body.classList.remove('overflow-hidden'); // Mostra a barra de rolagem do body
}

// Eventos para abrir o modal
document.querySelectorAll('.open-modal').forEach(btn => {
    btn.addEventListener('click', function () {
        const idx = parseInt(this.getAttribute('data-service'), 10) - 1;
        openModal(idx);
    });
});

// Evento para fechar pelo botão
closeModalBtn.addEventListener('click', closeModal);

// Evento para fechar clicando fora do conteúdo
modal.addEventListener('click', function (e) {
    if (e.target === modal) closeModal();
});