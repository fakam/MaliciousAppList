// Hello from Mark and Josh
$.ajax({
    type: "GET",
    url: "list.txt",
    success: function(data) {
        // EpicEditor -Josh
        var opts = {
        container: 'epiceditor',
        textarea: null,
        basePath: 'epiceditor',
        clientSideStorage: false,
        localStorageName: 'epiceditor',
        useNativeFullscreen: true,
        parser: marked,
        file: {
            name: 'epiceditor',
            defaultContent: 'Loading...',
            autoSave: 100
        },
        theme: {
            base: '/themes/base/epiceditor.css',
            preview: '/themes/preview/minimal.css',
            editor: '/themes/editor/epic-dark.css'
        },
        button: false,
        focusOnLoad: false,
        shortcut: {
            modifier: 18,
            fullscreen: 70,
            preview: 80
        },
        string: {
            togglePreview: 'Toggle Preview',
            toggleEdit: 'Toggle Edit',
            toggleFullscreen: 'Enter Fullscreen'
        },
        autogrow: true
        }
        
        var editor = new EpicEditor(opts).load();
        editor.importFile('malicious-files', data);
        editor.open('malicious-files');
        editor.preview();
    }, //END success fn
    failure: function() {
        console.log('failure');
    }
}); //END $.ajax