#!/bin/bash
print() {
    color=''
    message=''
    case $1 in
        'red' )
            color='\033[0;31m'
            message=$2
            ;;
        * )
            message=$1
            color='\033[1;32m'
            ;;
    esac
    echo -e "${color}${message}\033[0m"
}

print '请输入仓库地址'
read repository

rm -rf .git
print '.git removed'

git init 1> /dev/null
print 'git inited'

git remote add origin $repository
print 'set repository'

git add . 1> /dev/null
git commit -m 'inited' 1> /dev/null
git push -f origin master 1> /dev/null
if [ "$?" = "1" ];then
    exit 0;
fi
print "push inited repository"
