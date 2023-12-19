import Swal from "sweetalert2";

export const copyTitle = () => {
    const title = document.querySelector('.bbcode--title') as HTMLDivElement;
    const textArea = document.createElement('textarea');
    textArea.value = title.innerText;
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