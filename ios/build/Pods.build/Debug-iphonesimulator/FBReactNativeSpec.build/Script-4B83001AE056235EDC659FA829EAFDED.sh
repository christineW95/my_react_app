#!/bin/sh
set -o pipefail

bash -l -c 'SRCS_DIR=/Volumes/Work/Development/farmacie-specializzate/node_modules/react-native/scripts/../Libraries CODEGEN_MODULES_OUTPUT_DIR=/Volumes/Work/Development/farmacie-specializzate/node_modules/react-native/scripts/../React/FBReactNativeSpec/FBReactNativeSpec CODEGEN_MODULES_LIBRARY_NAME=FBReactNativeSpec /Volumes/Work/Development/farmacie-specializzate/node_modules/react-native/scripts/generate-specs.sh' 2>&1 | tee "${SCRIPT_OUTPUT_FILE_0}"
