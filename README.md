<p align="center">
  <a  target="blank"><img src="images/images.png" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center" style="font-family: impact; font-size: 20px">Tienda de Celulares Apple</p>

## INTEGRANTES

```bash
LUIS MIGUEL CRUZ GARECA
JOSÉ GABRIEL QUISPE FERNÁNDEZ
```

## DESCRIPCIÓN

Fundada en 2018 por Marta López en Sucre, Bolivia, Celulares Apple comenzó como una pequeña tienda de dispositivos iphones, destacándose por su atención personalizada al cliente. Rápidamente ganó una base de clientes leales. Innovadora en su enfoque, Celulares Apple  actualmente, cuenta con dos sucursales y sigue siendo un referente local en tecnología móvil, con planes de implementar una aplicación web para mejorar el servicio al cliente.

En la tienda se sigue manejando los registros de compras de forma manual y pasadas a un archivo en excel, donde requiere una forma de tener todos los productos enlistados de forma mas rápida y sin registros duplicados.

Cada vez que se hace una compra de celular u otro articulo, el empleado llena en un cuaderno la compra donde registra el precio, la marca y la salida del producto. Registrando tambien al cliente y que tenga un descuento para alguna venta en el año, luego registra el empleado en una hoja excel la compra correspondiente y actualizando el stock del producto.

Esto es habitual, para tener un registro actualizado y que no haya ni una perdida o robo de la tienda, y mantener un control preciso de los productos, para ver si hay existencias en la tienda,para una nueva compra o descartar el producto de la tienda dependiendo a la demanda. 

El trabajo que realiza cada empleado es muy amplioso y requieren un sistema donde puedan llenar de forma mas rápida y actualizada los celulares Iphone de la tienda de celulares.

## ENTIDADES

```bash
Usuario(id, email, password)

Colores(id, nombre, celulares)

Celulares(id, nombre, descripcion, marca, modelo, precio, fecha_creacion, fecha_modificacion, id_categoria, id_color)

Compra(id, direccion_envio, total, fecha_venta, id_usuario, id_celular)

Categorias(id, nombre, descripcion)
```
