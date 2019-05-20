$(function() {
    $('#menu-email').fitText(1.8);
    $('#menu-equipe').fitText(1.5);
    $('.menu-navigation-icons').slicknav();
});

$(document).ready(function() {
    $('#datatable').DataTable( {
        "language": {
            "decimal":        "",
            "emptyTable":     "Nenhum registro",
            "info":           "Exibindo _START_ até _END_ de _TOTAL_ registros",
            "infoEmpty":      "Exibindo 0 até 0 de 0 registros",
            "infoFiltered":   "(filtrado do _MAX_ total registros)",
            "infoPostFix":    "",
            "thousands":      ",",
            "lengthMenu":     "_MENU_",
            "loadingRecords": "Carregando...",
            "processing":     "Processando...",
            "search":         "Buscar:",
            "zeroRecords":    "Nenhum registro",
            "paginate": {
                "first":      "Primeiro",
                "last":       "Último",
                "next":       "Próximo",
                "previous":   "Anterior"
            },
            "aria": {
                "sortAscending":  ": ative para ordenar coluna crescente",
                "sortDescending": ": ative para ordenar coluna decrescente"
            }
        },
        "lengthMenu": [[5, 10], [5, 10]]
    } );
} );

(function(){
    $.get( "https://localhost:44301/api/values", function( data ) {
        $("#menu-chamada").html( "Chamada(" + data.length + ")");
    }, "json" );
    setTimeout(arguments.callee, 1000);
  })();

  $(document).ready(function() {
    $('#datatable-planos-terapeuticos').DataTable( {
        "language": {
            "decimal":        "",
            "emptyTable":     "Nenhum registro",
            "info":           "Exibindo _START_ até _END_ de _TOTAL_ registros",
            "infoEmpty":      "Exibindo 0 até 0 de 0 registros",
            "infoFiltered":   "(filtrado do _MAX_ total registros)",
            "infoPostFix":    "",
            "thousands":      ",",
            "lengthMenu":     "_MENU_",
            "loadingRecords": "Carregando...",
            "processing":     "Processando...",
            "search":         "Buscar:",
            "zeroRecords":    "Nenhum registro",
            "paginate": {
                "first":      "Primeiro",
                "last":       "Último",
                "next":       "Próximo",
                "previous":   "Anterior"
            },
            "aria": {
                "sortAscending":  ": ative para ordenar coluna crescente",
                "sortDescending": ": ative para ordenar coluna decrescente"
            }
        },
        "lengthMenu": [[10], [10]]
    } );
} );

$(document).ready(function() {
    $('#datatable-agenda').DataTable( {
        "language": {
            "decimal":        "",
            "emptyTable":     "Nenhum registro",
            "info":           "Exibindo _START_ até _END_ de _TOTAL_ registros",
            "infoEmpty":      "Exibindo 0 até 0 de 0 registros",
            "infoFiltered":   "(filtrado do _MAX_ total registros)",
            "infoPostFix":    "",
            "thousands":      ",",
            "lengthMenu":     "_MENU_",
            "loadingRecords": "Carregando...",
            "processing":     "Processando...",
            "search":         "Buscar:",
            "zeroRecords":    "Nenhum registro",
            "paginate": {
                "first":      "Primeiro",
                "last":       "Último",
                "next":       "Próximo",
                "previous":   "Anterior"
            },
            "aria": {
                "sortAscending":  ": ative para ordenar coluna crescente",
                "sortDescending": ": ative para ordenar coluna decrescente"
            }
        },
        "lengthMenu": [[10], [10]]
    } );
} );