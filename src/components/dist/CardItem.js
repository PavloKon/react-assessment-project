"use strict";
exports.__esModule = true;
var react_1 = require("react");
var material_1 = require("@mui/material");
var MailOutline_1 = require("@mui/icons-material/MailOutline");
var PhoneEnabled_1 = require("@mui/icons-material/PhoneEnabled");
var Language_1 = require("@mui/icons-material/Language");
var Grid_1 = require("@mui/material/Grid");
var FavoriteBorderTwoTone_1 = require("@mui/icons-material/FavoriteBorderTwoTone");
var FavoriteRounded_1 = require("@mui/icons-material/FavoriteRounded");
var BorderColorOutlined_1 = require("@mui/icons-material/BorderColorOutlined");
var Delete_1 = require("@mui/icons-material/Delete");
var CardItem = function (_a) {
    var id = _a.id, name = _a.name, email = _a.email, favour = _a.favour, phone = _a.phone, website = _a.website, deleteItem = _a.deleteItem, handleFavour = _a.handleFavour;
    var handleDelete = function (userId) {
        deleteItem(userId);
    };
    return (react_1["default"].createElement(material_1.Box, { m: "10px", sx: { color: "dimgrey" } },
        react_1["default"].createElement(Grid_1["default"], { item: true, sx: { border: '2px solid #dedede', minWidth: "300px" } },
            react_1["default"].createElement(material_1.Box, { sx: { paddingTop: "20px", backgroundColor: '#eee', display: 'flex', justifyContent: 'center' } },
                react_1["default"].createElement("img", { style: { height: '200px' }, alt: "" + name, src: "https://avatars.dicebear.com/v2/avataaars/" + name + ".svg?options[mood][]=happy)" })),
            react_1["default"].createElement(material_1.Box, { m: "20px" },
                react_1["default"].createElement(material_1.Box, { sx: { marginBottom: '10px' } },
                    react_1["default"].createElement(material_1.Typography, { variant: "h6", component: "p", style: { fontWeight: 'bold' } }, name)),
                react_1["default"].createElement(material_1.Box, { sx: { display: 'flex', alignItems: 'center', marginBottom: '5px' } },
                    react_1["default"].createElement(MailOutline_1["default"], { style: { marginRight: '10px' } }),
                    react_1["default"].createElement(material_1.Typography, { variant: "body1", component: "p" }, email)),
                react_1["default"].createElement(material_1.Box, { sx: { display: 'flex', alignItems: 'center', marginBottom: '5px' } },
                    react_1["default"].createElement(PhoneEnabled_1["default"], { style: { marginRight: '10px' } }),
                    react_1["default"].createElement(material_1.Typography, { variant: "body1", component: "p" }, phone)),
                react_1["default"].createElement(material_1.Box, { sx: { display: 'flex', alignItems: 'center', marginBottom: '5px' } },
                    react_1["default"].createElement(Language_1["default"], { style: { marginRight: '10px' } }),
                    react_1["default"].createElement(material_1.Typography, { variant: "body1", component: "p" }, website))),
            react_1["default"].createElement(material_1.Box, { sx: { backgroundColor: "#eee", display: 'flex', textAlign: 'center', padding: '10px 0' } },
                react_1["default"].createElement(material_1.Box, { sx: { width: 'calc(100% / 3)' } }, !favour ?
                    react_1["default"].createElement(FavoriteBorderTwoTone_1["default"], { sx: { color: 'red', cursor: 'pointer' }, onClick: function () { return handleFavour(id, !favour); } })
                    :
                        react_1["default"].createElement(FavoriteRounded_1["default"], { sx: { color: 'red', cursor: 'pointer' }, onClick: function () { return handleFavour(id, !favour); } })),
                react_1["default"].createElement(material_1.Box, { sx: { width: 'calc(100% / 3)', borderLeft: '1px solid #ccc', borderRight: '1px solid #ccc' } },
                    react_1["default"].createElement(BorderColorOutlined_1["default"], { style: { cursor: 'pointer' } })),
                react_1["default"].createElement(material_1.Box, { sx: { width: 'calc(100% / 3)' } },
                    react_1["default"].createElement(Delete_1["default"], { onClick: function () { return handleDelete(id); }, style: { cursor: 'pointer' } }))))));
};
exports["default"] = CardItem;
