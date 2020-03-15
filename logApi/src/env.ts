import * as path from 'path'

export enum DeployEnv {
  Local = 'local',
  Testing = 'testing',
  Production = 'production'
}

let deployEnv: DeployEnv

export function loadDeployEnv(): DeployEnv {
  function initEnv() {
    switch (process.env.DEPLOY_ENV) {
      case 'local':
        return DeployEnv.Local
      case 'production':
        return DeployEnv.Production
      case 'testing':
        return DeployEnv.Testing
      default:
        throw new Error('Invalid DEPLOY_ENV')
    }
  }

  if (!deployEnv) {
    deployEnv = initEnv()
  }

  return deployEnv
}

export function getDeployEnv() {
  if (typeof deployEnv === 'undefined') {
    throw new Error('deployEnv is not loaded.')
  }
  return deployEnv
}

export function isLocalDeploy() {
  return getDeployEnv() === DeployEnv.Local
}

export function isTestingDeploy() {
  return getDeployEnv() === DeployEnv.Testing
}

export function isProductionDeploy() {
  return getDeployEnv() === DeployEnv.Production
}

export function loadEnv() {
  if (process.env.CAT === 'true') {
    process.env.CAT_HOME = path.resolve(__dirname, '../dev/cat')
  }

  loadDeployEnv()
}
