# 
# Automatically opens the localHost server once loades when you type ```grunt``` into your Terminal
# https://www.npmjs.com/package/open
# 
# =============================================

module.exports = all: path: 'http://localhost:<%= express.all.options.port%>'