    //Plus & Minus for Quantity product
    $(document).ready(function(){
        var total = 0;
        var quantity = 1;
        var subtotal = 0;
        // produk1
        $('.quantity-right-plus').click(function(e){
            e.preventDefault();
            var quantity = parseInt($('#quantity').val());
            $('#quantity').val(quantity + 1);
            const prize = $('.prize').val()
            var newQuantity = parseInt($('#quantity').val());
            const subtotal = newQuantity*prize
            $('.subtotal').val(subtotal)
            console.log(subtotal)
            total += subtotal-(quantity*prize)
            if(total > 100000){
                total2=total-(total*0.1);
                $('.total2').text(`Rp ${(total2)}`)
            }else{
                total2=total;
                $('.total2').text(`Rp ${(total2)}`)
            }
            if(total > 100000){
                total2=total-(total*0.1);
                $('.total2').text(`Rp ${(total2)}`)

            }else{
                total2=total;
                $('.total2').text(`Rp ${(total2)}`)
            }
            $('.total').text(`Rp ${(total)}`)
        });

        $('.quantity-left-minus').click(function(e){
            e.preventDefault();
            var quantity = parseInt($('#quantity').val());
            if(quantity > 0){
                $('#quantity').val(quantity - 1);
                const prize = $('.prize').val()
                var newQuantity = parseInt($('#quantity').val());
                const subtotal = newQuantity*prize
                $('.subtotal').val(subtotal)
                total -= quantity*prize-(subtotal)
                $('.total').text(`Rp ${total}`)
            }
        });
        // produk 2
        $('.quantity-right-plus2').click(function(e){
            e.preventDefault();
            var quantity = parseInt($('#quantity2').val());
            $('#quantity2').val(quantity + 1);
            const prize = $('.prize2').val()
            var newQuantity = parseInt($('#quantity2').val());
            const subtotal = newQuantity*prize
            $('.subtotal2').val(subtotal)
            console.log(subtotal)
            total += subtotal-(quantity*prize)
            if(total > 100000){
                total2=total-(total*0.1);
                $('.total2').text(`Rp ${(total2)}`)
            }else{
                total2=total;
                $('.total2').text(`Rp ${(total2)}`)
            }
            
            $('.total').text(`Rp ${total}`)
        });

        $('.quantity-left-minus2').click(function(e){
            e.preventDefault();
            var quantity = parseInt($('#quantity2').val());
            if(quantity > 0){
                $('#quantity2').val(quantity - 1);
                const prize = $('.prize2').val()
                var newQuantity = parseInt($('#quantity2').val());
                const subtotal = newQuantity*prize
                $('.subtotal2').val(subtotal)
                total -= quantity*prize-(subtotal)
                $('.total').text(`Rp ${total}`)
            }
        });
         // produk 3
         $('.quantity-right-plus3').click(function(e){
            e.preventDefault();
            var quantity = parseInt($('#quantity3').val());
            $('#quantity3').val(quantity + 1);
            const prize = $('.prize3').val()
            var newQuantity = parseInt($('#quantity3').val());
            const subtotal = newQuantity*prize
            $('.subtotal3').val(subtotal)
            total += subtotal-(quantity*prize)
            if(total > 100000){
                total2=total-(total*0.1);
                $('.total2').text(`Rp ${(total2)}`)
            }else{
                total2=total;
                $('.total2').text(`Rp ${(total2)}`)
            }
            $('.total').text(`Rp ${total}`)
        });

        $('.quantity-left-minus3').click(function(e){
            e.preventDefault();
            var quantity = parseInt($('#quantity3').val());
            if(quantity > 0){
              $('#quantity3').val(quantity - 1);
              const prize = $('.prize3').val()
              var newQuantity = parseInt($('#quantity3').val());
              const subtotal = newQuantity*prize
              $('.subtotal3').val(subtotal)
              total -= quantity*prize-(subtotal)
              $('.total').text(`Rp ${total}`)
            }
        }); 
        // produk 4
         $('.quantity-right-plus4').click(function(e){
            e.preventDefault();
            var quantity = parseInt($('#quantity4').val());
            $('#quantity4').val(quantity + 1);
            const prize = $('.prize4').val()
            var newQuantity = parseInt($('#quantity4').val());
            const subtotal = newQuantity*prize
            $('.subtotal4').val(subtotal)
            total += subtotal-(quantity*prize)
            if(total > 100000){
                total2=total-(total*0.1);
                $('.total2').text(`Rp ${(total2)}`)
            }else{
                total2=total;
                $('.total2').text(`Rp ${(total2)}`)
            }
            $('.total').text(`Rp ${total}`)
        });

        $('.quantity-left-minus4').click(function(e){
            e.preventDefault();
            var quantity = parseInt($('#quantity4').val());
            if(quantity > 0){
              $('#quantity4').val(quantity - 1);
              const prize = $('.prize4').val()
              var newQuantity = parseInt($('#quantity4').val());
              const subtotal = newQuantity*prize
              $('.subtotal4').val(subtotal)
              total -= quantity*prize-(subtotal)
              $('.total').text(`Rp ${total}`)
            }
        });
        // produk 5
         $('.quantity-right-plus5').click(function(e){
            e.preventDefault();
            var quantity = parseInt($('#quantity5').val());
            $('#quantity5').val(quantity + 1);
            const prize = $('.prize5').val()
            var newQuantity = parseInt($('#quantity5').val());
            const subtotal = newQuantity*prize
            $('.subtotal5').val(subtotal)
            total += subtotal-(quantity*prize)
            if(total > 100000){
                total2=total-(total*0.1);
                $('.total2').text(`Rp ${(total2)}`)
            }else{
                total2=total;
                $('.total2').text(`Rp ${(total2)}`)
            }
            $('.total').text(`Rp ${total}`)
        });

        $('.quantity-left-minus5').click(function(e){
            e.preventDefault();
            var quantity = parseInt($('#quantity5').val());
            if(quantity > 0){
              $('#quantity5').val(quantity - 1);
              const prize = $('.prize5').val()
              var newQuantity = parseInt($('#quantity5').val());
              const subtotal = newQuantity*prize
              $('.subtotal5').val(subtotal)
              total -= quantity*prize-(subtotal)
              $('.total').text(`Rp ${total}`)
            }
        });   
        // produk 6
         $('.quantity-right-plus6').click(function(e){
            e.preventDefault();
            var quantity = parseInt($('#quantity6').val());
            $('#quantity6').val(quantity + 1);
            const prize = $('.prize6').val()
            var newQuantity = parseInt($('#quantity6').val());
            const subtotal = newQuantity*prize
            $('.subtotal6').val(subtotal)
            total += subtotal-(quantity*prize)
            if(total > 100000){
                total2=total-(total*0.1);
                $('.total2').text(`Rp ${(total2)}`)
            }else{
                total2=total;
                $('.total2').text(`Rp ${(total2)}`)
            }
            $('.total').text(`Rp ${total}`)
        });

        $('.quantity-left-minus6').click(function(e){
            e.preventDefault();
            var quantity = parseInt($('#quantity6').val());
            if(quantity > 0){
              $('#quantity6').val(quantity - 1);
              const prize = $('.prize6').val()
              var newQuantity = parseInt($('#quantity6').val());
              const subtotal = newQuantity*prize
              $('.subtotal6').val(subtotal)
              total -= quantity*prize-(subtotal)
              $('.total').text(`Rp ${total}`)
            }
        });   
        // produk 7
         $('.quantity-right-plus7').click(function(e){
            e.preventDefault();
            var quantity = parseInt($('#quantity7').val());
            $('#quantity7').val(quantity + 1);
            const prize = $('.prize7').val()
            var newQuantity = parseInt($('#quantity7').val());
            const subtotal = newQuantity*prize
            $('.subtotal7').val(subtotal)
            total += subtotal-(quantity*prize)
            if(total > 100000){
                total2=total-(total*0.1);
                $('.total2').text(`Rp ${(total2)}`)
            }else{
                total2=total;
                $('.total2').text(`Rp ${(total2)}`)
            }
            $('.total').text(`Rp ${total}`)
        });

        $('.quantity-left-minus7').click(function(e){
            e.preventDefault();
            var quantity = parseInt($('#quantity7').val());
            if(quantity > 0){
              $('#quantity7').val(quantity - 1);
              const prize = $('.prize7').val()
              var newQuantity = parseInt($('#quantity7').val());
              const subtotal = newQuantity*prize
              $('.subtotal7').val(subtotal)
              total -= quantity*prize-(subtotal)
              $('.total').text(`Rp ${total}`)
            }
        });   
        // produk 8
         $('.quantity-right-plus8').click(function(e){
            e.preventDefault();
            var quantity = parseInt($('#quantity8').val());
            $('#quantity8').val(quantity + 1);
            const prize = $('.prize8').val()
            var newQuantity = parseInt($('#quantity8').val());
            const subtotal = newQuantity*prize
            $('.subtotal8').val(subtotal)
            total += subtotal-(quantity*prize)
            if(total > 100000){
                total2=total-(total*0.1);
                $('.total2').text(`Rp ${(total2)}`)
            }else{
                total2=total;
                $('.total2').text(`Rp ${(total2)}`)
            }
            $('.total').text(`Rp ${total}`)
        });

        $('.quantity-left-minus8').click(function(e){
            e.preventDefault();
            var quantity = parseInt($('#quantity8').val());
            if(quantity > 0){
              $('#quantity8').val(quantity - 1);
              const prize = $('.prize8').val()
              var newQuantity = parseInt($('#quantity8').val());
              const subtotal = newQuantity*prize
              $('.subtotal8').val(subtotal)
              total -= quantity*prize-(subtotal)
              $('.total').text(`Rp ${total}`)
            }
        });   
        // produk 9
         $('.quantity-right-plus9').click(function(e){
            e.preventDefault();
            var quantity = parseInt($('#quantity9').val());
            $('#quantity9').val(quantity + 1);
            const prize = $('.prize9').val()
            var newQuantity = parseInt($('#quantity9').val());
            const subtotal = newQuantity*prize
            $('.subtotal9').val(subtotal)
            total += subtotal-(quantity*prize)
            if(total > 100000){
                total2=total-(total*0.1);
                $('.total2').text(`Rp ${(total2)}`)
            }else{
                total2=total;
                $('.total2').text(`Rp ${(total2)}`)
            }
            $('.total').text(`Rp ${total}`)
        });

        $('.quantity-left-minus9').click(function(e){
            e.preventDefault();
            var quantity = parseInt($('#quantity9').val());
            if(quantity > 0){
              $('#quantity9').val(quantity - 1);
              const prize = $('.prize9').val()
              var newQuantity = parseInt($('#quantity9').val());
              const subtotal = newQuantity*prize
              $('.subtotal9').val(subtotal)
              total -= quantity*prize-(subtotal)
              $('.total').text(`Rp ${total}`)
            }
        });   
        // produk 10
         $('.quantity-right-plus10').click(function(e){
            e.preventDefault();
            var quantity = parseInt($('#quantity10').val());
            $('#quantity10').val(quantity + 1);
            const prize = $('.prize10').val()
            var newQuantity = parseInt($('#quantity10').val());
            const subtotal = newQuantity*prize
            $('.subtotal10').val(subtotal)
            total += subtotal-(quantity*prize)
            if(total > 100000){
                total2=total-(total*0.1);
                $('.total2').text(`Rp ${(total2)}`)
            }else{
                total2=total;
                $('.total2').text(`Rp ${(total2)}`)
            }
            $('.total').text(`Rp ${total}`)
        });

        $('.quantity-left-minus10').click(function(e){
            e.preventDefault();
            var quantity = parseInt($('#quantity10').val());
            if(quantity > 0){
              $('#quantity10').val(quantity - 1);
              const prize = $('.prize10').val()
              var newQuantity = parseInt($('#quantity10').val());
              const subtotal = newQuantity*prize
              $('.subtotal10').val(subtotal)
              total -= quantity*prize-(subtotal)
              $('.total').text(`Rp ${total}`)
            }
        });   

    });