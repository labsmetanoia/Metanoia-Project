# Third-party libraries, self-hosted

Served from this site so a feature never depends on another host being reachable
(docs/20-platform-audit.md, finding A-17). Files are the unmodified published builds
from the npm registry; update by replacing the file and the version in its name.

| File | Library | Version | Licence | Used by |
|---|---|---|---|---|
| html2canvas-1.4.1.min.js | html2canvas, Niklas von Hertzen | 1.4.1 | MIT | Career Map report export |
| jspdf-2.5.1.umd.min.js | jsPDF, James Hall and contributors | 2.5.1 | MIT | Career Map report export |

Both are loaded only when a visitor presses "Download report" (career-map-assessment.html).
The jsPDF source-map comment is removed because the map file is not shipped.
