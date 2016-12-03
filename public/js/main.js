document.addEventListener('click',function(e){
    if(e.target && e.target.id== 'remove'){
        fetch('users', {
            method: 'delete',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
            id:  e.target.dataset.userId 
            })
        }).then(function (response) {
            window.location.reload();
        })

        e.preventDefault()

    }
 })