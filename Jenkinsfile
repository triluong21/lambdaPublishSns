import groovy.json.JsonSlurper
pipeline {
  agent any 
  environment {
    LASTNAME = 'Luong'
    HELLO = 'Hello'
  }
  stages {
    stage('Checkout') {
      steps {
        checkout scm
        echo "checkout scm"
      }
    }
    stage('Display name') {
      steps { 
        environment {
          FIRSTNAME = "Tri"
        }
        echo "${HELLO} ${FIRSTNAME} ${LASTNAME}"
      }
    } 
  }
}