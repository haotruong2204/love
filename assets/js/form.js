(function ($) {
  "use strict";

  var urlResponse = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSfUwYzBZygFj6yvAXnsrFRwy7CZ4uV2Olt-HU_9ozxHnRkONQ/formResponse';
  var urlResponseQr = 'https://docs.google.com/forms/d/e/1FAIpQLScA7S58OuVfPIkoeQnJngx1xpr68q7ihhL_jUXK4Be_OtHJ9g/formResponse';

  if ($("#contact-form-main").length) {
    $("#contact-form-main").validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            phone: "required",
            guest: "required",
        },

        messages: {
          name: "Bạn tên chi đó, để mình tiện xưng hô :v",
          phone: "Để lại số điện thoại mình sẽ chủ động liên lạc để đưa bạn tới địa điểm tổ chức",
          guest: "Đừng quên chọn người thương đi cùng chứ =))",
        },

        submitHandler: function (form) {
          var unindexed_array = $('.contact-main').map(function() {
            return {
              code: $(this).attr('code'), value : $(this).val()
            }
          }).get();
          var indexed_array = {};
          $.map(unindexed_array, function(n, i){
            indexed_array[n['code']] = n['value'];
          });
          
          $.ajax({
              type: "POST",
              url: urlResponse,
              data: indexed_array,
              dataType:'jsonp',
          });
          $("#loader").show();
          setTimeout(function () {
              const name = $("#name").val();
              $("#loader").hide();
              $("#success").append(`Chúng mình đã nhận được thông tin, cảm ơn ${name} đã tham dự cùng bọn mình`);
              $("#success").slideDown("slow");
              form.reset();
          }, 2000);

          setTimeout(function () {
              $("#success").slideUp("slow");
          }, 10000);
        }
    });
  }

  if ($("#contact-form-qr").length) {
    $("#contact-form-qr").validate({
        rules: {
          name: {
            required: true,
            minlength: 2
          },
          msg: "required",
        },

        messages: {
          name: "Bạn tên chi đó, để mình tiện xưng hô :v",
          msg: "Người đừng lặng im đến thế, hãy để lại vài lời với chúng mình điiiiiii",
        },

        submitHandler: function (form) {
          var unindexed_array_qr = $('.contact-qr').map(function() {
            return {
              code: $(this).attr('code'), value : $(this).val()
            }
          }).get();
          var indexed_array_qr = {};
          $.map(unindexed_array_qr, function(n, i){
            indexed_array_qr[n['code']] = n['value'];
          });

          $.ajax({
            type: "POST",
            url: urlResponseQr,
            data: indexed_array_qr,
            dataType:'jsonp',
          });

          $("#loader-qr").show();
          setTimeout(function () {
            const name = $("#name-qr").val();
            $("#loader-qr").hide();
            $("#success-qr").append(`Chúng mình đã nhân được lời chúc của bạn, cảm ơn ${name} nhớ`);
            $("#success-qr").slideDown("slow");
            form.reset();
          }, 2000);

          setTimeout(function () {
            $("#success-qr").slideUp("slow");
          }, 10000);
        }
    });
  }

  $('#not').on('click', function () {
    if($(this).prop('checked')) {
      $('#contact-form-main').hide()
      $('#contact-form-qr').show()
      $('#contact-form-qr').removeClass('d-none')
    }
  })

  $("#attend").on('click', function () {
    if($(this).prop('checked')) {
      $('#contact-form-main').show()
      $('#contact-form-qr').hide()
    }
  })

  $("#qr-ng").on("click", function () {
    $(this).prop("checked") && ($("#nhatrai").hide(), $("#nhagai").show(), $("#nhagai").removeClass("d-none"));
  }),
  $("#qr-nt").on("click", function () {
    $(this).prop("checked") && ($("#nhatrai").show(), $("#nhagai").hide());
  });

})(window.jQuery);
