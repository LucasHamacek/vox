document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contatoForm');
    const success = document.getElementById('formSuccess');
    if (!form) return;
    form.addEventListener('submit', async function (e) {
        e.preventDefault();
        const data = new FormData(form);
        try {
            const res = await fetch(form.action, {
                method: 'POST',
                body: data,
                headers: { 'Accept': 'application/json' }
            });
            if (res.ok) {
                form.classList.add('hidden');
                success.classList.remove('hidden');
                form.reset();
            } else {
                alert('Erro ao enviar. Tente novamente.');
            }
        } catch {
            alert('Erro ao enviar. Tente novamente.');
        }
    });
});