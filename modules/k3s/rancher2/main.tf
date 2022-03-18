module "cluster" {
  # source  = "camptocamp/k3s/rancher2"
  source = "./modules"
  # version = "1.0.1"

  network_name  = "bridge"
  # cluster_name  = var.cluster_name
  # k3s_version   = var.k3s_version
  # worker_groups = var.worker_groups
  api_url    = var.rancher2_api_url
  access_key = var.rancher2_access_key
  secret_key = var.rancher2_secret_key
  insecure = var.rancher2_insecures

  server_config = [
    "--disable", "traefik",
    "--disable", "metrics-server",
  ]

  cluster_endpoint = var.cluster_endpoint
  server_ports     = var.server_ports

  registry_mirrors = {
    "docker.io" = [
      "REGISTRY_PROXY_REMOTEURL=https://registry-1.docker.io",
    ],
    "quay.io" = [
      "REGISTRY_PROXY_REMOTEURL=https://quay.io/repository",
      "REGISTRY_COMPATIBILITY_SCHEMA1_ENABLED=true",
    ],
    "gcr.io" = [
      "REGISTRY_PROXY_REMOTEURL=https://gcr.io",
    ],
    "ghcr.io" = [
      "REGISTRY_PROXY_REMOTEURL=https://ghcr.io",
    ],
    "k8s.gcr.io" = [
      "REGISTRY_PROXY_REMOTEURL=https://k8s.gcr.io",
    ],
    "us.gcr.io" = [
      "REGISTRY_PROXY_REMOTEURL=https://us.gcr.io",
    ],
    "registry.access.redhat.com" = [
      "REGISTRY_PROXY_REMOTEURL=https://registry.access.redhat.com",
    ]
  }
}
