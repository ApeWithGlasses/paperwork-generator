import Swal from "sweetalert2";

export const copyCode = () => {
    const code = document.querySelector('.bbcode') as HTMLDivElement;
    const textArea = document.createElement('textarea');
    textArea.value = code.innerText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Texto copiado correctamente',
        showConfirmButton: false,
        timer: 1500
    });
}