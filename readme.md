## NPWriter validation plugin

Validation plugin for Svenskt näringsliv.

### Rules
Require `section`, `channel` and `headline` for posts with state `usable` and `withheld`.  
Require `headline` for posts with state `draft`, `approved` and `done`.  
Warn when posts with state `draft`, `approved` or `done` is missing `channel` or `section`.