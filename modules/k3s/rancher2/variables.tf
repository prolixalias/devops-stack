variable "k3s_version" {
  description = "The K3s version to use"
  type        = string
  default     = "v1.21.6-k3s1"
}

variable "rancher2_api_url" {
  description = "URL of Rancher API"
  type        = string
  default     = "https://localhost"
}

variable "rancher2_access_key" {
  description = "Rancher API access key"
  type        = string
}

variable "rancher2_secret_key" {
  description = "Rancher API secret key"
  type        = string
}

variable "rancher2_insecure" {
  description = "Allow insecure connection to Rancher"
  type        = bool
  default     = true
}

variable "server_ports" {
  description = "Port mappings of the server container."
  default     = []

  type = set(object({
    internal = number
    external = optional(number)
    ip       = optional(string)
    protocol = optional(string)
  }))
}

variable "cluster_endpoint" {
  description = "The api endpoint, when empty it's the container's IP."
  type        = string
  default     = null
}

variable "worker_groups" {
  description = "A map defining worker group configurations"

  type = map(object({
    node_count  = number
    node_labels = list(string)
    node_taints = list(string)
  }))

  default = {
    "default" = {
      node_count  = 2
      node_labels = []
      node_taints = []
    }
  }
}
