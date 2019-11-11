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
        environment {
          FIRSTNAME = "Tri"
        }  
        steps { 
        echo "${HELLO} ${FIRSTNAME} ${LASTNAME}"
      }
    } 
    stage('Test') {
      steps {
        sh 'yarn test'
      }
    }
  }
}