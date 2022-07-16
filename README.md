# Django leadmanager
#### (proyecto de testeo de Django + React)

## Instalación
### 1 Instalar python3 y pip3

```bash
sudo apt install python3 pip3
mkdir djr-leadmanager
cd djr-leadmanager/
```
### 2 Clonar este repositorio

```bash
git clone https://github.com/alexmeave/djr-leadmanager.git
```

### 3 Crear ambiente de trabajo
```bash
pip3 install pipenv
pipenv shell
```
#### 3.1 Cambiar prompt de pipenv shell *opcional*

> El prompt por default de `pipenv shell` es el nombre del directorio
> sobre el que estamos, para cambiarlo hay que editar el archivo
> `bin/activate` del directorio donde se guardó el ambiente virtual
> (que aparece cada vez que se ejecuta `pipenv shell`)
> 
> p. ej.:
> /home/_user_/.local/share/virtualenvs/_djr-leadmanager_-_randmstr_/bin/activate

Si se quiere modificar el prompt del ambiente por uno nuevo:
*(Reemplazar todo lo que esté entre * * por tus datos )*
```bash
exit
nano /home/*user*/.local/share/virtualenvs/*djr-leadmanager*-*random*/bin/activate
```
Modificar líneas 64 y 65:
```bash
	if [ "xdjr-leadmanager " != x ] ; then
		PS1="(djr-leadmanager) ${PS1-}"
```

### 4 Instalamos dependencias dentro del ambiente de trabajo
```bash
pipenv install
npm install
```

### 5 Iniciar el server
```bash
cd leadmanager
python manage.py runserver
```

Abrir en el navegador http://127.0.0.1:8000/

Registrar un usuario y LISTO!!!


> Written with [StackEdit](https://stackedit.io/).
