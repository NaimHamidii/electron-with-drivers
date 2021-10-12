!macro customHeader
    RequestExecutionLevel admin
!macroend
!macro customInstall
    MessageBox MB_OK "You need to install RFID drivers too"
    ExecWait '"$INSTDIR\resources\dpinst64.exe"'
!macroend