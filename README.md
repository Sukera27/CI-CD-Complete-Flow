# 🚀 Despliegue de Microservicios en Kubernetes (AKS -- Azure)

## 1. Descripción del proyecto

Este proyecto muestra el despliegue de una arquitectura de
microservicios usando Kubernetes sobre Azure Kubernetes Service (AKS).\
Las imágenes Docker se almacenan en Azure Container Registry (ACR) y el
clúster se administra desde una máquina virtual en Azure mediante
kubectl.

La aplicación está compuesta por: - Microservicio backend
(microservice) - Cliente (microclient) - Frontend (microfront) - Base de
datos MySQL en Azure Database for MySQL

------------------------------------------------------------------------

## 2. Arquitectura general

Componentes: - AKS -- Clúster Kubernetes - ACR -- Registro de imágenes
Docker - VM en Azure -- Administración - Kubernetes: Deployments, Pods,
Services (LoadBalancer)

------------------------------------------------------------------------

## 3. Preparación de la máquina virtual

### 3.1 Instalar Docker

``` bash
sudo apt update
sudo apt install -y docker.io
sudo systemctl enable docker
sudo systemctl start docker
```

### 3.2 Instalar Azure CLI

``` bash
curl -sL https://aka.ms/InstallAzureCLIDeb | sudo bash
```

### 3.3 Instalar kubectl con snap

``` bash
sudo snap install kubectl --classic
kubectl version --client
```

------------------------------------------------------------------------

## 4. Autenticación y conexión a Azure

``` bash
az login
az acr login --name contenedoreskube
```

Conectar al clúster AKS:

``` bash
az aks get-credentials --resource-group <RESOURCE_GROUP> --name <AKS_CLUSTER_NAME>
kubectl get nodes
```

------------------------------------------------------------------------

## 5. Construcción y subida de imágenes Docker

``` bash
docker build -t contenedoreskube.azurecr.io/microclient .
docker push contenedoreskube.azurecr.io/microclient
```

(Repetir para microservice y microfront)

------------------------------------------------------------------------

## 6. Conceptos básicos de Kubernetes

### Pod

Unidad mínima de ejecución. Puede contener uno o varios contenedores que
comparten red e IP.

### Deployment

Gestiona Pods, réplicas y actualizaciones.

### Réplicas

Número de copias de un Pod en ejecución para alta disponibilidad.

### Service

Expone Pods y proporciona balanceo de carga.

### LoadBalancer

Crea un balanceador externo en Azure con IP pública.

------------------------------------------------------------------------

## 7. Despliegue en Kubernetes

``` bash
kubectl apply -f microdeployment.yaml
kubectl apply -f nlb-service.yaml
kubectl apply -f microfront-deployment.yaml
kubectl apply -f microfront-service.yaml
```

Verificar:

``` bash
kubectl get pods
kubectl get services
```

------------------------------------------------------------------------

## 8. Acceso a la aplicación

``` bash
kubectl get svc
```

Usar la IP pública del servicio microfront-service en el navegador.

------------------------------------------------------------------------

## 9. Conclusión

Este proyecto demuestra el uso de Kubernetes en Azure con una
arquitectura de microservicios escalable, segura y alineada con buenas
prácticas cloud.
