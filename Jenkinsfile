import groovy.json.JsonSlurper
pipeline {
  agent any
  tools {nodejs "node"}
      stages {
      stage('Checkout') {
        steps {
          gitVars = checkout scm
        }
      }
      stage('Install') {
        steps {
          sh 'yarn install'
        }
      }
      stage('Version') {
        steps {
          sh 'npm --version'
        }
      } 
      }
}