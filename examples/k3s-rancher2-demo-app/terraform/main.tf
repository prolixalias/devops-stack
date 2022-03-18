locals {
  base_domain = module.cluster.base_domain

  kubernetes_host                   = module.cluster.kubernetes_host
  kubernetes_username               = module.cluster.kubernetes_username
  kubernetes_password               = module.cluster.kubernetes_password
  kubernetes_cluster_ca_certificate = module.cluster.kubernetes_cluster_ca_certificate
}

module "cluster" {
  source = "git::https://github.com/prolixalias/devops-stack.git//modules/k3s/rancher2?ref=discovery"
  
  cluster_name = "my-cluster"
  node_count   = 1

  extra_apps = [
    {
      metadata = {
        name = "project-apps"
      }
      spec = {
        project = "default"

        source = {
          path           = "argocd/project-apps"
          repoURL        = "https://github.com/example/myapp.git"
          targetRevision = "HEAD"

          helm = {
            values = <<EOT
spec:
  source:
    repoURL: https://github.com/prolixalias/devops-stack.git
    targetRevision: master
          EOT
          }
        }

        destination = {
          namespace = "default"
          server    = "https://kubernetes.default.svc"
        }

        syncPolicy = {
          automated = {
            selfHeal = true
          }
        }
      }
    }
  ]
}