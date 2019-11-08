import groovy.json.JsonSlurper
pipeline {
  agent any
      stages {
      stage('Checkout') {
        steps {
          checkout scm
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