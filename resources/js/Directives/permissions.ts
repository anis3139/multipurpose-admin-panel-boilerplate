import { DirectiveOptions } from "vue";
import { usePage } from "@inertiajs/inertia-vue3";

const usePermissionAndRole = () => {
    let page = usePage().props;
    return {
        permissions: page.value?.auth?.user?.permissions,
        roles: page.value?.auth?.user?.roles,
    };
};

const can = (value: string) => {
    let _return = false;
    let permissions = usePermissionAndRole().permissions;

    if (permissions.length == 0) {
        _return = false;
    }

    if (!Array.isArray(permissions)) {
        _return = false;
    }

    if (value.includes("|")) {
        value.split("|").forEach(function (item) {
            if (permissions.includes(item.trim())) {
                _return = true;
            }
        });
    } else if (value.includes("&")) {
        _return = true;
        value.split("&").forEach(function (item) {
            if (!permissions.includes(item.trim())) {
                _return = false;
            }
        });
    } else {
        _return = permissions.includes(value.trim());
    }

    return _return;
};

const is = (value: string) => {
    let _return = false;
    let roles = usePermissionAndRole().roles;

    if (roles.length == 0) {
        _return = false;
    }

    if (!Array.isArray(roles)) {
        _return = false;
    }
    
    if (value.includes("|")) {
        value.split("|").forEach(function (item) {
            if (roles.includes(item.trim())) {
                _return = true;
            }
        });
    } else if (value.includes("&")) {
        _return = true;
        value.split("&").forEach(function (item) {
            if (!roles.includes(item.trim())) {
                _return = false;
            }
        });
    } else {
        _return = roles.includes(value.trim());
    }

    return _return;
};

const permissionDirective: DirectiveOptions = {
    beforeMount(el, { value }) {
        if (!can(value)) {
            el.style.display = "none";
        }
    },
};

const roleDirective: DirectiveOptions = {
    beforeMount(el, { value }) {
        if (!is(value)) {
            el.style.display = "none";
        }
    },
};

export { permissionDirective, roleDirective };
