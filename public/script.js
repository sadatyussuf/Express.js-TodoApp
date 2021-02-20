$(document).ready(function(){
    $('.delete-item').on('click',function(e){
        $target = $(e.target);
        const id = $target.attr('data-id');
        $.ajax({
            type: 'DELETE',
            url: '/todos/delete/'+id,
            success: function (response) {
                alert('Deleting item in ToDo');
                window.location.href='/todos';
            },
            error:function(err){
                console.log(err)
            }

        })
    })


    // $('.edit-item').on('click',function 
    // (e) {
    //     $btn = $(e.target).parent('li').text()
    //     console.log($btn)
    // })
})