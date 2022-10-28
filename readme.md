## NPWriter validation plugin

Validation plugin for Svenskt näringsliv.

### Rules
Require `section`, `channel` and `headline` for posts with state `usable` and `withheld`.  
Require `headline` for posts with state `draft`, `approved` and `done` (not for meta type).  
Warn when posts with state `draft`, `approved` or `done` is missing `channel` or `section`.

### Docs
https://docs.navigaglobal.com/writer/developer-guide/index/quickstart
https://docs.navigaglobal.com/writer/developer-guide/index/validationandhooks
